package br.com.aula.exemplo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		usuario = this.usuarioRepository.save(usuario);
		return usuario;
	}

	@Override
	public List<Usuario> findAllUsuarios(String nome) {
		List<Usuario> usuarios = nome == null || nome.isEmpty() ? this.usuarioRepository.findAll()
				: this.usuarioRepository.findByNomeContainsIgnoreCase(nome);

		return usuarios;
	}

}
