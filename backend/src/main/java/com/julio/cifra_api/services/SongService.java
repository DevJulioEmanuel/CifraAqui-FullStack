package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.ResponseSongDTO;
import com.julio.cifra_api.dto.SongDTO;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SongService {
    private final SongRepository songRepository;
    private final DeezerService deezerService;

    public SongService(SongRepository songRepository, DeezerService deezerService) {
        this.songRepository = songRepository;
        this.deezerService = deezerService;
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

    public Mono<List<ResponseSongDTO>> searchSong(String title) {
        return deezerService.searchSong(title)
                .map(response -> response.getData().stream()
                        .map(trackDTO -> {
                            ResponseSongDTO dto = new ResponseSongDTO();
                            dto.setId(trackDTO.getId());
                            dto.setTitle(trackDTO.getTitle());
                            dto.setArtist(trackDTO.getArtistDTO().getName());
                            return dto;
                        })
                        .toList()
                );
    }

    public ResponseSongDTO toDTO(Song song) {
        ResponseSongDTO dto = new ResponseSongDTO();

        dto.setId(song.getId());
        dto.setTitle(song.getTitle());
        dto.setArtist(song.getArtist());

        return dto;
    }
}
