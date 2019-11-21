package br.com.aula.exemplo.core.config.jwt;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil implements Serializable {

	private static final long serialVersionUID = -9163787328328323387L;

	public static final long JWT_TOKEN_VALIDITY =  5 * 60 * 60;

	public static final long JWT_REFRESH_TOKEN_VALIDITY = 7 * 24 * 60 * 60;

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.secret-refresh}")
	private String secretRefresh;

	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, this.secret, Claims::getSubject);
	}

	public String getUsernameFromRefreshToken(String token) {
		return getClaimFromToken(token, this.secretRefresh, Claims::getSubject);
	}

	public Date getExpirationDateFromToken(String token) {
		return this.getClaimFromToken(token, this.secret, Claims::getExpiration);
	}

	public Date getExpirationDateFromRefreshToken(String token) {
		return this.getClaimFromToken(token, this.secretRefresh, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, String secret, Function<Claims, T> claimsResolver) {
		Claims claims = this.getAllClaimsFromToken(token, secret);
		return claimsResolver.apply(claims);
	}

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return this.doGenerateToken(claims, userDetails.getUsername());
	}

	public String generateRefreshToken(UserDetails userDetails) {
		return this.doGenerateRefreshToken(userDetails.getUsername());
	}

	private Claims getAllClaimsFromToken(String token, String secret) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}

	public Boolean validateToken(String token, UserDetails userDetails) {
		String userName = this.getUsernameFromToken(token);

		return userDetails.getUsername().equals(userName) && !this.isTokenExpired(token);
	}

	public Boolean validateRefreshToken(String token, UserDetails userDetails) {
		String userName = this.getUsernameFromRefreshToken(token);

		return userDetails.getUsername().equals(userName) && !this.isRefreshTokenExpired(token);
	}

	private boolean isRefreshTokenExpired(String token) {
		Date date = this.getExpirationDateFromRefreshToken(token);
		return date.before(new Date());
	}

	private boolean isTokenExpired(String token) {
		Date date = this.getExpirationDateFromToken(token);
		return date.before(new Date());
	}

	private String doGenerateToken(Map<String, Object> claims, String subject) {
		String token = Jwts.builder().addClaims(claims).setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, this.secret).compact();
		return token;
	}

	private String doGenerateRefreshToken(String subject) {
		String token = Jwts.builder().setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_REFRESH_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, this.secretRefresh).compact();
		return token;
	}

}
