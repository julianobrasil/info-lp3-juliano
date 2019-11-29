package com.example.demo.core.model.domain;

import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "usuario")
public class Usuario {
	private String id;

	@JsonIgnore
	@Version
	private String version;

	private String name;

	private String username;

	@JsonIgnore
	private String password;

	private Boolean active;
}
