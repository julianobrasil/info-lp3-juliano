package br.com.aula.exemplo.service;

import java.util.List;

import br.com.aula.exemplo.model.Usuario;

public interface UsuarioService {

	/**
	 * Este método gera um usuário de forma estática
	 * 
	 * @param nome
	 * 
	 * @return
	 */
	Usuario montaUsuarioEstatico(String nome);

	/**
	 * Cria um usuário novo
	 * 
	 * @param usuario
	 * @return
	 */
	Usuario criaUsuario(Usuario usuario);

	/**
	 * Encontra todos os usuários
	 * 
	 * @return os usuários encontrados
	 */
	List<Usuario> findAllUsuarios(String nome);

	/**
	 * Busca um usuário pelo seu e-mail
	 * 
	 * @param username
	 * @return
	 */
	Usuario findByEmail(String username);

}
