package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.ResponseSongDTO;
import com.julio.cifra_api.dto.SongDTO;
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

    public ResponseSongDTO create(Song song) {
        return toDTO(songRepository.save(song));
    }

    public ResponseSongDTO getSongById(UUID uuid) {
        Song song = songRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("Song not found"));
        return toDTO(song);
    }

    public List<ResponseSongDTO> findAll() {
        return songRepository.findAll().stream().map(this::toDTO).toList();
    }

    public ResponseSongDTO toDTO(Song song) {
        ResponseSongDTO dto = new ResponseSongDTO();

        dto.setId(song.getId());
        dto.setTitle(song.getTitle());
        dto.setArtist(song.getArtist());

        return dto;
    }
}
