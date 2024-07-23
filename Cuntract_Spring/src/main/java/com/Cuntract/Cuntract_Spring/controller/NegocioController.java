package com.Cuntract.Cuntract_Spring.controller;

import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.entity.Oferta;
import com.Cuntract.Cuntract_Spring.services.Negocio.NegocioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/negocio")
public class NegocioController {

    @Autowired
    private NegocioService negocioService;
    @PostMapping("/oferta/{userId}")
    public ResponseEntity<?> postOferta(@PathVariable Long userId, @ModelAttribute OfertaDto ofertaDto) throws IOException {
        boolean success = negocioService.postOferta(userId, ofertaDto);
        if (success){
            return ResponseEntity.status(HttpStatus.OK).build();

        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
