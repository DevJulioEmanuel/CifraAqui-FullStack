package com.julio.cifra_api.services;

import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SongService {
    private final SongRepository songRepository;

    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public Song create(Song song) {
        return songRepository.save(song);
    }

    public Song getSongById(UUID uuid) {
        return songRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("Song not found"));
    }

    public List<Song> findAll() {
        return songRepository.findAll();
    }

}
