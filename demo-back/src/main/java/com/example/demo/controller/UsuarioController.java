package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.core.model.domain.Usuario;
import com.example.demo.service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public List<Usuario> findAllUsers() {
		return this.usuarioService.findAllUsers();
	}

	@PostMapping
	public Usuario gravaUsuario(@RequestBody Usuario usuario) {
		return this.usuarioService.saveUsuario(usuario);
	}

	@DeleteMapping("/{id}")
	public Boolean gravaUsuario(@PathVariable("id") String id) {
		this.usuarioService.removeUsuario(id);
		return true;
	}
}
