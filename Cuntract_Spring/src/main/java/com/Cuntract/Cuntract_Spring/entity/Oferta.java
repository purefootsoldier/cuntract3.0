package com.Cuntract.Cuntract_Spring.entity;

import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "Ofertas")
@Data
public class Oferta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String descripcion;

    private Double pago;

    private LocalDate fechaCreacion;


    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] imagen;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    public OfertaDto getOfertaDto() {
        OfertaDto ofertaDto = new OfertaDto();

        ofertaDto.setId(id);
        ofertaDto.setTitulo(titulo);
        ofertaDto.setDescripcion(descripcion);
        ofertaDto.setPago(pago);
        ofertaDto.setFechaCreacion(LocalDate.now());
        ofertaDto.setImagenRegresada(imagen);
        ofertaDto.setNegocio(user.getNombre());

        return ofertaDto;
    }
}
