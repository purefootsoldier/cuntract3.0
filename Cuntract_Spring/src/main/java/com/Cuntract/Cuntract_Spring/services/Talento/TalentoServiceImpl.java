package com.Cuntract.Cuntract_Spring.services.Talento;

import com.Cuntract.Cuntract_Spring.dto.OfertaDetailsForTalentoDto;
import com.Cuntract.Cuntract_Spring.dto.OfertaDto;
import com.Cuntract.Cuntract_Spring.dto.ReviewDto;
import com.Cuntract.Cuntract_Spring.entity.Oferta;
import com.Cuntract.Cuntract_Spring.entity.Review;
import com.Cuntract.Cuntract_Spring.entity.User;
import com.Cuntract.Cuntract_Spring.repository.OfertaRepository;
import com.Cuntract.Cuntract_Spring.repository.ReviewRepository;
import com.Cuntract.Cuntract_Spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TalentoServiceImpl implements  TalentoService{

    @Autowired
    private OfertaRepository ofertaRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    public List<OfertaDto> getAllOfertas(){
        return ofertaRepository.findAll().stream().map(Oferta::getOfertaDto).collect(Collectors.toList());
    }

    public List<OfertaDto> searchOfertaByName(String name){
        return ofertaRepository.findAllByTituloContaining(name).stream().map(Oferta::getOfertaDto).collect(Collectors.toList());
    }

    public OfertaDetailsForTalentoDto getOfertaDeailsByOfertaId(Long ofertaId){
        Optional<Oferta> optionalOferta = ofertaRepository.findById(ofertaId);
        OfertaDetailsForTalentoDto ofertaDetailsForTalentoDto = new OfertaDetailsForTalentoDto();
        if(optionalOferta.isPresent()){
            ofertaDetailsForTalentoDto.setOfertaDto(optionalOferta.get().getOfertaDto());

            List<Review> reviewList = reviewRepository.findAllByOfertaId(ofertaId);
            ofertaDetailsForTalentoDto.setReviewDtoList(reviewList.stream().map(Review::getDto).collect(Collectors.toList()));
        }
        return ofertaDetailsForTalentoDto;
    }

    public Boolean giveReview(ReviewDto reviewDto){
        Optional<User> optionalUser = userRepository.findById(reviewDto.getUserId());
        Optional<Oferta> optionalOferta = ofertaRepository.findById(reviewDto.getOfertaId());

        if(optionalUser.isPresent() && optionalOferta.isPresent()){
            Review review = new Review();

            review.setReviewDate(new Date());
            review.setReview(reviewDto.getReview());
            review.setRating(reviewDto.getRating());

            review.setUser(optionalUser.get());
            review.setOferta(optionalOferta.get());

            reviewRepository.save(review);

            return true;
        }
        return false;

    }
}
