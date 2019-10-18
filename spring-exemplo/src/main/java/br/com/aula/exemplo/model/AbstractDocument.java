package br.com.aula.exemplo.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("serial")
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class AbstractDocument implements Serializable {

	@Id
	private String id;

	@Version
	private Integer version;

	@JsonIgnore
	@CreatedDate
	private LocalDateTime creationLocalDateTime;

	@JsonIgnore
	@CreatedBy
	private String createdBy;

	@JsonIgnore
	@LastModifiedDate
	private LocalDateTime lasModifiedLocalDateTime;

	@JsonIgnore
	@LastModifiedBy
	private String lasModifiedBy;
}
