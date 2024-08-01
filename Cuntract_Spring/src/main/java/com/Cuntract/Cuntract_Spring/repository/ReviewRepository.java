package com.Cuntract.Cuntract_Spring.repository;

import com.Cuntract.Cuntract_Spring.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findAllByOfertaId(Long ofertaId);
}
