package com.Cuntract.Cuntract_Spring.services.Negocio;


import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.entity.Oferta;
import com.Cuntract.Cuntract_Spring.entity.User;
import com.Cuntract.Cuntract_Spring.repository.OfertaRepository;
import com.Cuntract.Cuntract_Spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
public class NegocioServiceImpl implements NegocioService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OfertaRepository ofertaRepository;

    public boolean postOferta(Long userId, OfertaDto ofertaDto) throws IOException {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()){
            Oferta oferta = new Oferta();
            oferta.setTitulo(ofertaDto.getTitulo());
            oferta.setDescripcion(ofertaDto.getDescripcion());
            oferta.setImagen(ofertaDto.getImagen().getBytes());
            oferta.setPago(ofertaDto.getPago());
            oferta.setHorario(ofertaDto.getHorario());
            oferta.setFechaCreacion(ofertaDto.getFechaCreacion());
            oferta.setUser(optionalUser.get());

            ofertaRepository.save(oferta);
            return true;
        }
        return false;

    }
}