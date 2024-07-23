package com.Cuntract.Cuntract_Spring.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Data
public class OfertaDto {
    private Long id;

    private String titulo;

    private String descripcion;

    private Double pago;

    private Double horario;


    private MultipartFile imagen;

    private LocalDateTime fechaCreacion;

    private byte[] imagenRegresada;
    private Long userId;
    private String negocio;
}
