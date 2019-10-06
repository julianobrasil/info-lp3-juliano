package br.com.aula.exemplo.service.impl;

import org.springframework.stereotype.Service;

import br.com.aula.exemplo.model.Usuario;
import br.com.aula.exemplo.service.TesteService;

@Service
public class TesteServiceImpl implements TesteService {

	@Override
	public Usuario montaUsuarioEstatico(String nome) {
		return Usuario.builder().email("juliano@email.com").nome(nome).build();
	}

}
