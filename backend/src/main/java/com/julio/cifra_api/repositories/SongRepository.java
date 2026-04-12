package com.julio.cifra_api.repositories;

import com.julio.cifra_api.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SongRepository extends JpaRepository<Song, Long> {
}
