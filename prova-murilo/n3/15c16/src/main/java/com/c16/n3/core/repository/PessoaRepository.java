package com.c16.n3.core.repository;

import com.c16.n3.core.model.domain.Pessoa;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PessoaRepository extends MongoRepository<Pessoa, String> {

}