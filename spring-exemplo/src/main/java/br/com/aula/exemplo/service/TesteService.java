package br.com.aula.exemplo.service;

import br.com.aula.exemplo.model.Usuario;

public interface TesteService {

	/**
	 * Este método gera um usuário de forma estática
	 * 
	 * @param nome
	 * 
	 * @return
	 */
	Usuario montaUsuarioEstatico(String nome);

}
