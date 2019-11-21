package br.com.aula.exemplo.core.nosql;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.aula.exemplo.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
	List<Usuario> findByNomeContainsIgnoreCase(String parteDoNome);

	Usuario findByEmail(String email);
}
