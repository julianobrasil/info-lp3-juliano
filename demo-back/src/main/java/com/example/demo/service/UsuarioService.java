package com.example.demo.service;

import java.util.List;

import com.example.demo.core.model.domain.Usuario;

public interface UsuarioService {

	List<Usuario> findAllUsers();

	Usuario saveUsuario(Usuario usuario);

	void removeUsuario(String id);

}
