package br.com.aula.exemplo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.aula.exemplo.controller.to.AtualizaUsuarioRequest;
import br.com.aula.exemplo.model.Usuario;
import br.com.aula.exemplo.service.TesteService;

@RestController
@RequestMapping("/api/teste")
public class ControllerDeTeste {
	@Autowired
	TesteService testeService;

	@GetMapping
	public Usuario respondeRequisicaoGet(@RequestParam("nome-do-usuario") String nome) {

		return this.testeService.montaUsuarioEstatico(nome);
	}

	@GetMapping("/nome/{nome-do-usuario}")
	public Usuario respondeRequisicaoGetComPathVariable(@PathVariable("nome-do-usuario") String nome) {

		return this.testeService.montaUsuarioEstatico(nome);
	}

	@PatchMapping("/nome/{nome-do-usuario}")
	public Usuario respondeRequisicaoGetComPatchVariable(@PathVariable("nome-do-usuario") String nome,
			@RequestBody AtualizaUsuarioRequest obj) {

		return this.testeService.montaUsuarioEstatico(obj.getNome());
	}

}
