package com.Cuntract.Cuntract_Spring.services.Negocio;

import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.entity.Oferta;

import java.io.IOException;
import java.util.List;

public interface NegocioService {

    boolean postOferta(Long userId, OfertaDto ofertaDto) throws IOException;
    List<OfertaDto> getAllOfertas(Long userId);
}
