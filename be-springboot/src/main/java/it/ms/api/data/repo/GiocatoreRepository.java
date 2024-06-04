package it.ms.api.data.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import it.ms.api.data.entity.Giocatore;

public interface GiocatoreRepository extends JpaRepository<Giocatore, Long>{

    Optional<Giocatore> findByNome(String nome);
    
}
