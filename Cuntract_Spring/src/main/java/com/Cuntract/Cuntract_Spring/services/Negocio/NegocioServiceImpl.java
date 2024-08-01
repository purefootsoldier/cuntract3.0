package com.Cuntract.Cuntract_Spring.services.Negocio;


import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.entity.Oferta;
import com.Cuntract.Cuntract_Spring.entity.User;
import com.Cuntract.Cuntract_Spring.repository.OfertaRepository;
import com.Cuntract.Cuntract_Spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
            oferta.setFechaCreacion(ofertaDto.getFechaCreacion());
            oferta.setUser(optionalUser.get());

            ofertaRepository.save(oferta);
            return true;
        }
        return false;
    }
    //metodo para ver todas las ofertas de trabajo de un solo negocio
    public List<OfertaDto> getAllOfertas(Long userId) {
        return ofertaRepository.findAllByUserId(userId).stream().map(Oferta::getOfertaDto).collect(Collectors.toList());
    }
    public OfertaDto getOfertaById(Long ofertaId) {
        Optional<Oferta> optionalOferta = ofertaRepository.findById(ofertaId);
        if (optionalOferta.isPresent()){
            return optionalOferta.get().getOfertaDto();
        }
        return null;
    }

    public boolean updateOferta(Long ofertaId, OfertaDto ofertaDto) throws IOException {
        Optional<Oferta> optionalOferta = ofertaRepository.findById(ofertaId);
        if(optionalOferta.isPresent()) {
            Oferta oferta = optionalOferta.get();
            oferta.setTitulo(ofertaDto.getTitulo());
            oferta.setDescripcion(ofertaDto.getDescripcion());
            oferta.setPago(ofertaDto.getPago());
            if (ofertaDto.getImagen() != null) {
                oferta.setImagen(ofertaDto.getImagen().getBytes());
            }

            ofertaRepository.save(oferta);
            return true;
        } else {
            return false;
        }
    }
    public boolean deleteOferta(Long ofertaId){
        Optional<Oferta> optionalOferta = ofertaRepository.findById(ofertaId);
        if(optionalOferta.isPresent()) {
            ofertaRepository.delete(optionalOferta.get());
            return true;
        }
        return false;
    }
}
