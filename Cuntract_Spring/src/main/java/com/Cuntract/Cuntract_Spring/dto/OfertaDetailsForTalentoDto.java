package com.Cuntract.Cuntract_Spring.dto;

import lombok.Data;

import java.util.List;

@Data
public class OfertaDetailsForTalentoDto {
    private  OfertaDto ofertaDto;

    private List<ReviewDto> reviewDtoList;
}
