package com.Cuntract.Cuntract_Spring.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ReviewDto {
    private Long id;

    private Date reviewDate;

    private String review;

    private Long rating;

    private Long userId;

    private Long ofertaId;

    private String talentoNombre;

    private String ofertaNombre;
}
