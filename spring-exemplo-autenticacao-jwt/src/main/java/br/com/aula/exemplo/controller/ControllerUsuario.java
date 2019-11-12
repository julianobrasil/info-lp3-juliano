package br.com.aula.exemplo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.aula.exemplo.model.Usuario;
import br.com.aula.exemplo.service.UsuarioService;

@RestController
@CrossOrigin
@RequestMapping("/api/usuario")
public class ControllerUsuario {
	@Autowired
	UsuarioService usuarioService;

	@GetMapping
	public List<Usuario> carregaTodosOsUsuarios(@RequestParam("nome") String nome) {

		return this.usuarioService.findAllUsuarios(nome);
	}

	@PostMapping
	public Usuario gravaUsuario(@RequestBody Usuario usuario) {

		usuario = this.usuarioService.criaUsuario(usuario);

		return usuario;
	}

	// @GetMapping("/nome/{nome-do-usuario}")
	// public Usuario
	// respondeRequisicaoGetComPathVariable(@PathVariable("nome-do-usuario") String
	// nome) {
	//
	// return null; //'this.usuarioService.findAllUsuarios();
	// }
	//
	// @PatchMapping("/nome/{nome-do-usuario}")
	// public Usuario
	// respondeRequisicaoGetComPatchVariable(@PathVariable("nome-do-usuario") String
	// nome,
	// @RequestBody AtualizaUsuarioRequest obj) {
	//
	// return // this.usuarioService.findAllUsuarios();
	// }

}
