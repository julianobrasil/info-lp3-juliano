package br.com.aula.exemplo.core.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.aula.exemplo.core.config.jwt.JwtAuthenticationEntryPoint;
import br.com.aula.exemplo.core.config.jwt.JwtRequestFilter;
import br.com.aula.exemplo.core.config.jwt.JwtUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		http
			.csrf()
				.disable()
			.authorizeRequests()
				.antMatchers("/authenticate","/refresh").permitAll()
				.antMatchers(HttpMethod.POST, "/api/usuario/novo").permitAll()
				.anyRequest().authenticated()
			.and()
				.exceptionHandling().authenticationEntryPoint(this.jwtAuthenticationEntryPoint)
			.and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		// @formatter:on

		http.cors();

		http.addFilterBefore(this.jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// @formatter:off
		auth
			.userDetailsService(this.jwtUserDetailsService)
			.passwordEncoder(this.passwordEncoder());
		// @formatter:on
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
}
