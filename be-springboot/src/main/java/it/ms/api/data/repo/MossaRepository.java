package it.ms.api.data.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.ms.api.data.entity.Mossa;
import it.ms.api.data.entity.Partita;


public interface MossaRepository extends JpaRepository<Mossa, Long> {

  List<Mossa> findByPartita(Partita p);
  
}