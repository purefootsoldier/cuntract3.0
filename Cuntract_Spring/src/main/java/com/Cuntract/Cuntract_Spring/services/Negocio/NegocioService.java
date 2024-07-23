package com.Cuntract.Cuntract_Spring.services.Negocio;

import com.Cuntract.Cuntract_Spring.dto.OfertaDto;

import java.io.IOException;

public interface NegocioService {

    boolean postOferta(Long userId, OfertaDto ofertaDto) throws IOException;
}
