package com.example.demo.core.model.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.core.model.domain.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
