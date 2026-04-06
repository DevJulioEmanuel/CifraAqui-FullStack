package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.DeezerServiceDTOs.DeezerSongResponseDTO;
import com.julio.cifra_api.dto.DeezerServiceDTOs.SongDTO;
import com.julio.cifra_api.dto.ResponseSongDTO;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.mapper.AlbumMapper;
import com.julio.cifra_api.mapper.ArtistMapper;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SongService {
    private final SongRepository songRepository;
    private final DeezerService deezerService;
    private final ArtistMapper artistMapper;
    private final AlbumMapper albumMapper;

    public SongService(SongRepository songRepository, DeezerService deezerService, ArtistMapper artistMapper, AlbumMapper albumMapper) {
        this.songRepository = songRepository;
        this.deezerService = deezerService;
        this.artistMapper = artistMapper;
        this.albumMapper = albumMapper;
    }

    public ResponseSongDTO create(Song song) {
        return toDTO(songRepository.save(song));
    }

    public ResponseSongDTO getSongById(Long id) {
        Song song = songRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Song not found"));
        return toDTO(song);
    }

    public List<ResponseSongDTO> findAll() {
        return songRepository.findAll().stream().map(this::toDTO).toList();
    }

    public List<ResponseSongDTO> searchSong(String title) {
        DeezerSongResponseDTO response = deezerService.searchSong(title);

        if (response==null || response.getData()==null) {
            return List.of();
        }

        return response.getData().stream()
                .map(songDTO -> {
                    ResponseSongDTO dto = new ResponseSongDTO();
                    dto.setId(songDTO.getId());
                    dto.setTitle(songDTO.getTitle());
                    dto.setArtist(songDTO.getArtist());
                    dto.setPreview(songDTO.getPreview());
                    dto.setAlbum(songDTO.getAlbum());

                    return dto;
                })
                .toList();
    }

    public ResponseSongDTO searchSongById(String id) {
        SongDTO response = deezerService.getById(id);

        if (response == null) {
            return null;
        }

        ResponseSongDTO dto = new ResponseSongDTO();
        dto.setId(response.getId());
        dto.setTitle(response.getTitle());
        dto.setArtist(response.getArtist());
        dto.setPreview(response.getPreview());
        dto.setAlbum(response.getAlbum());

        return dto;
    }

    public ResponseSongDTO toDTO(Song song) {
        ResponseSongDTO dto = new ResponseSongDTO();

        dto.setId(song.getId());
        dto.setTitle(song.getTitle());
        dto.setArtist(artistMapper.toDTO(song.getArtist()));
        dto.setAlbum(albumMapper.toDTO(song.getAlbum()));

        return dto;
    }
}
