package com.Cuntract.Cuntract_Spring.entity;

import com.Cuntract.Cuntract_Spring.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date reviewDate;

    private String review;

    private Long rating;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "oferta_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Oferta oferta;

    public ReviewDto getDto() {
        ReviewDto reviewDto = new ReviewDto();

        reviewDto.setId(id);
        reviewDto.setReview(review);
        reviewDto.setRating(rating);
        reviewDto.setReviewDate(reviewDate);
        reviewDto.setUserId(user.getId());
        reviewDto.setTalentoNombre(user.getNombre());
        reviewDto.setOfertaId(oferta.getId());
        reviewDto.setOfertaNombre(oferta.getTitulo());

        return reviewDto;
    }

}
