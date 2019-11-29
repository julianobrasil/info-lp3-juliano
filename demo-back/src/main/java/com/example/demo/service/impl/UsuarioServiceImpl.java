package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.core.model.domain.Usuario;
import com.example.demo.core.model.repository.UsuarioRepository;
import com.example.demo.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public List<Usuario> findAllUsers() {
		return this.usuarioRepository.findAll();
	}

	@Override
	public Usuario saveUsuario(Usuario usuario) {
		if (usuario.getId() != null) {
			Optional<Usuario> usuarioBanco = this.usuarioRepository.findById(usuario.getId());
			if (usuarioBanco.isPresent()) {
				usuario.setVersion(usuarioBanco.get().getVersion());
				usuario.setPassword(usuarioBanco.get().getPassword());
			}
		}

		return this.usuarioRepository.save(usuario);
	}

	@Override
	public void removeUsuario(String id) {
		this.usuarioRepository.deleteById(id);
	}

}
