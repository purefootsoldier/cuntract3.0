package com.Cuntract.Cuntract_Spring.services.Talento;

import com.Cuntract.Cuntract_Spring.dto.OfertaDetailsForTalentoDto;
import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.dto.ReviewDto;

import java.util.List;

public interface TalentoService {

    List<OfertaDto> getAllOfertas();

    List<OfertaDto> searchOfertaByName(String name);

    OfertaDetailsForTalentoDto getOfertaDeailsByOfertaId(Long ofertaId);

    Boolean giveReview(ReviewDto reviewDto);
}
