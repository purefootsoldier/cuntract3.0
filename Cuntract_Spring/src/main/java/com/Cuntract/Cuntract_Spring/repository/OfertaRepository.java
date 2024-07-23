package com.Cuntract.Cuntract_Spring.repository;


import com.Cuntract.Cuntract_Spring.entity.Oferta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaRepository extends JpaRepository<Oferta, Long> {


}
