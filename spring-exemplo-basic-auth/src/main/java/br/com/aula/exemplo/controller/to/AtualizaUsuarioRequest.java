package br.com.aula.exemplo.controller.to;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AtualizaUsuarioRequest {
	private Integer id;
	private String nome;
}
