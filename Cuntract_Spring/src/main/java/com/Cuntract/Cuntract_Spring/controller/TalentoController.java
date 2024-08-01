package com.Cuntract.Cuntract_Spring.controller;


import com.Cuntract.Cuntract_Spring.dto.ReviewDto;
import com.Cuntract.Cuntract_Spring.services.Talento.TalentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/talento")
public class TalentoController {

    @Autowired
    private TalentoService talentoService;

    @GetMapping("/ofertas")
    public ResponseEntity<?> getAllOfertas() {
        return ResponseEntity.ok(talentoService.getAllOfertas());
    }

    @GetMapping("/buscar/{titulo}")
    public ResponseEntity<?> searchOfertaByTitulo(@PathVariable String titulo) {
        return ResponseEntity.ok(talentoService.searchOfertaByName(titulo));
    }

    @GetMapping("/oferta/{ofertaId}")
    public ResponseEntity<?> getOfertaDetailsByOfertaId(@PathVariable Long ofertaId){
        return ResponseEntity.ok(talentoService.getOfertaDeailsByOfertaId(ofertaId));
    }

    @PostMapping("/review")
    public ResponseEntity<?> giveReview(@RequestBody ReviewDto reviewDto){
        Boolean success = talentoService.giveReview(reviewDto);
        if(success){
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
