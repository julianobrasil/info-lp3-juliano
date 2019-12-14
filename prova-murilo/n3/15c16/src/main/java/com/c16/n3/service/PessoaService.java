package com.c16.n3.service;

import java.util.List;
import com.c16.n3.core.model.domain.Pessoa;

public interface PessoaService {
	List<Pessoa> findAllPessoas();

	Pessoa savePessoa(Pessoa pessoa);
}
