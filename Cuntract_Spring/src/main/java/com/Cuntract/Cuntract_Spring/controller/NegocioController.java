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

    @GetMapping("/ofertas/{userId}")
    public ResponseEntity<?> getAllOfertasByUserId(@PathVariable Long userId) throws IOException {
        return ResponseEntity.ok(negocioService.getAllOfertas(userId));
    }

    @GetMapping("/oferta/{ofertaId}")
    public ResponseEntity<?> getOfertaById(@PathVariable Long ofertaId){
        OfertaDto ofertadto = negocioService.getOfertaById(ofertaId);
        if(ofertadto != null){
            return ResponseEntity.ok(ofertadto);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PutMapping("/oferta/{ofertaId}")
    public ResponseEntity<?> updateOferta(@PathVariable Long ofertaId, @ModelAttribute OfertaDto ofertaDto) throws IOException {
        boolean success = negocioService.updateOferta(ofertaId, ofertaDto);
        if (success){
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @DeleteMapping("/oferta/{ofertaId}")
    public ResponseEntity<?> deleteOferta(@PathVariable Long ofertaId){
        boolean success = negocioService.deleteOferta(ofertaId);
        if (success) {
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
