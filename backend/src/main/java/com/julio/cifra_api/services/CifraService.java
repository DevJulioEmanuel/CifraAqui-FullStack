package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.CreateCifraRequestDTO;
import com.julio.cifra_api.dto.ResponseCifraDTO;
import com.julio.cifra_api.dto.SongDTO;
import com.julio.cifra_api.entity.Cifra;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.repositories.CifraRepository;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CifraService {
    private final CifraRepository cifraRepository;
    private final SongRepository songRepository;

    public CifraService(CifraRepository cifraRepository, SongRepository songRepository) {
        this.cifraRepository = cifraRepository;
        this.songRepository = songRepository;
    }

    public ResponseCifraDTO create(CreateCifraRequestDTO requestDTO) {
        Song song = songRepository.findByDeezerId(requestDTO.getDeezerId())
                .orElseGet(() -> {
                    Song newSong = new Song();
                    newSong.setDeezerId(requestDTO.getDeezerId());
                    newSong.setTitle(requestDTO.getTitle());
                    newSong.setArtist(requestDTO.getArtist());
                    return songRepository.save(newSong);
                });

        Cifra cifra = new Cifra();
        cifra.setContent(requestDTO.getContent());
        cifra.setSong(song);

        return toDTO(cifraRepository.save(cifra));
    }

    public ResponseCifraDTO getCifraById(UUID uuid) {
        Cifra cifra = cifraRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("Cifra não encontrada"));

        return toDTO(cifra);
    }

    public List<ResponseCifraDTO> findAll() {
        return cifraRepository.findAll().stream().map(this::toDTO).toList();
    }

    private ResponseCifraDTO toDTO(Cifra cifra) {
        ResponseCifraDTO dto = new ResponseCifraDTO();

        dto.setId(cifra.getId());
        dto.setContent(cifra.getContent());

        SongDTO songDTO = new SongDTO();
        songDTO.setTitle(cifra.getSong().getTitle());
        songDTO.setArtist(cifra.getSong().getArtist());

        dto.setSong(songDTO);

        return dto;
    }
}
