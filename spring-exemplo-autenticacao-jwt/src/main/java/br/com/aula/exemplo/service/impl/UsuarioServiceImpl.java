package br.com.aula.exemplo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.aula.exemplo.core.nosql.UsuarioRepository;
import br.com.aula.exemplo.model.Usuario;
import br.com.aula.exemplo.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;

	@Override
	public Usuario montaUsuarioEstatico(String nome) {
		return Usuario.builder().email("juliano@email.com").nome(nome).build();
	}

	@Override
	public Usuario criaUsuario(Usuario usuario) {
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
		usuario = this.usuarioRepository.save(usuario);
		return usuario;
	}

	@Override
	public List<Usuario> findAllUsuarios(String nome) {
		List<Usuario> usuarios = nome == null || nome.isEmpty() ? this.usuarioRepository.findAll()
				: this.usuarioRepository.findByNomeContainsIgnoreCase(nome);

		return usuarios;
	}

	@Override
	public Usuario findByEmail(String username) {

		return this.usuarioRepository.findByEmail(username);
	}

}
