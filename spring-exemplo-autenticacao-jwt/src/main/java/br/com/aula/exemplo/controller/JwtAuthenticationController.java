package br.com.aula.exemplo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.aula.exemplo.controller.to.JwtRequest;
import br.com.aula.exemplo.controller.to.JwtResponse;
import br.com.aula.exemplo.core.config.jwt.JwtTokenUtil;
import br.com.aula.exemplo.core.config.jwt.JwtUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest request) throws Exception {
		this.authenticate(request.getUsername(), request.getPassword());

		final UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(request.getUsername());

		String token = this.jwtTokenUtil.generateToken(userDetails);

		String refreshToken = this.jwtTokenUtil.generateRefreshToken(userDetails);

		return ResponseEntity.ok(JwtResponse.builder().token(token).refreshToken(refreshToken).build());
	}

	@GetMapping("/refresh")
	public ResponseEntity<?> refreshAuthenticationToken(HttpServletRequest request) throws Exception {
		String token = request.getHeader("Authorization");
		if (token != null && token.startsWith("Bearer ")) {
			token = token.substring(7);
		} else {
			throw new Exception("Invalid token");
		}

		String refreshToken = request.getHeader("Refresh-token");
		if (refreshToken == null) {
			throw new Exception("No refresh token was found");
		}

		String username = null;
		
		try {
			username = this.jwtTokenUtil.getUsernameFromToken(token);
		} catch (ExpiredJwtException e) {
			username = e.getClaims().getSubject();
			e.printStackTrace();
		}

		if (username == null) {
			throw new Exception("Invalid user");
		}

		UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);

		if (!this.jwtTokenUtil.validateRefreshToken(refreshToken, userDetails)) {
			throw new Exception("Invalid refresh token");
		}

		token = this.jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(JwtResponse.builder().token(token).refreshToken(refreshToken).build());
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			e.printStackTrace();
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			e.printStackTrace();
			throw new Exception("BAD_CREDENTIALS", e);
		}
	}
}
