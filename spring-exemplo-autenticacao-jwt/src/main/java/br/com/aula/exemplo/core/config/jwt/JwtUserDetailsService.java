package br.com.aula.exemplo.core.config.jwt;

import java.util.ArrayList;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Override
	@Cacheable(value = "userDetailsCachingStore", sync = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			System.out.println("Not using cache...");
		if ("javainuse".equals(username)) {
			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User wasn't found");
		}
	}

}
