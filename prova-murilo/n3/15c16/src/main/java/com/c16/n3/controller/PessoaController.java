package com.c16.n3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.c16.n3.core.model.domain.Pessoa;
import com.c16.n3.service.PessoaService;

@RestController
@RequestMapping("/api/pessoa")
@CrossOrigin
public class PessoaController {
	@Autowired
	private PessoaService pessoaService;

	@GetMapping
	public List<Pessoa> findAllPessoas() {
		return this.pessoaService.findAllPessoas();
	}

	@PostMapping
	public Pessoa gravaPessoa(@RequestBody Pessoa pessoa) {
		return this.pessoaService.savePessoa(pessoa);
	}
}
