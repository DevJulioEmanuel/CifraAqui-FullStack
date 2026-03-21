package com.julio.cifra_api.repositories;

import com.julio.cifra_api.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SongRepository extends JpaRepository<Song, UUID> {

    Optional<Song> findByDeezerId(String deezerId);
}
