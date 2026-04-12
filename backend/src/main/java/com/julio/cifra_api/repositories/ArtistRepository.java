package com.julio.cifra_api.repositories;

import com.julio.cifra_api.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
