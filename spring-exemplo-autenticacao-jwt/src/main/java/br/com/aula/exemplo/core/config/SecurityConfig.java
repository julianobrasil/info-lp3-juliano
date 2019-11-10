package br.com.aula.exemplo.core.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.aula.exemplo.controller.to.JwtRequestFilter;

@Configuration
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
    				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
    				.antMatchers("/authenticate").permitAll()
    				.anyRequest().authenticated()
    			.and()
    				.exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
    			.and()
    				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    		// @formatter:on
    		
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
