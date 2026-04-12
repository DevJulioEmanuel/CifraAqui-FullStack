package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.CreateCifraRequestDTO;

import com.julio.cifra_api.dto.ResponseCifraDTO;
import com.julio.cifra_api.entity.Cifra;import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.mapper.ArtistMapper;
import com.julio.cifra_api.mapper.SongMapper;
import com.julio.cifra_api.repositories.ArtistRepository;
import com.julio.cifra_api.repositories.CifraRepository;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CifraService {
    private final CifraRepository cifraRepository;


    public CifraService(CifraRepository cifraRepository, SongRepository songRepository, SongRepository songRepository1, ArtistRepository artistRepository, ArtistMapper artistMapper, DeezerService deezerService, SongMapper songMapper) {
        this.cifraRepository = cifraRepository;
    }

    public ResponseCifraDTO create(CreateCifraRequestDTO requestDTO) {
        Optional<Cifra> existing = cifraRepository.findByDeezerId(requestDTO.getDeezerId());

        Cifra cifra = existing.orElseGet(Cifra::new);

        cifra.setContent(requestDTO.getContent());
        cifra.setDeezerId(requestDTO.getDeezerId());
        cifra.setVideoId(requestDTO.getVideoId());

        return toDTO(cifraRepository.save(cifra));
    }

    public ResponseCifraDTO getCifraById(Long id) {
        Cifra cifra = cifraRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cifra não encontrada"));

        return toDTO(cifra);
    }

    public ResponseCifraDTO getCifraByDeezerId(String id) {
        Cifra cifra = cifraRepository.findByDeezerId(id)
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
        dto.setVideoId(cifra.getVideoId());
        return dto;
    }
}
