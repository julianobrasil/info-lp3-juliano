package com.c16.n3.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.c16.n3.core.model.domain.Pessoa;
import com.c16.n3.core.repository.PessoaRepository;
import com.c16.n3.service.PessoaService;

@Service
public class PessoaServiceImpl implements PessoaService {
	@Autowired
	private PessoaRepository pessoaRepository;

	@Override
	public List<Pessoa> findAllPessoas() {
		return this.pessoaRepository.findAll();
	}

	@Override
	public Pessoa savePessoa(Pessoa pessoa) {
		return this.pessoaRepository.save(pessoa);
	}
}
