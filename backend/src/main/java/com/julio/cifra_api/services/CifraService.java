package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.CreateCifraRequestDTO;
import com.julio.cifra_api.dto.DeezerServiceDTOs.ArtistDTO;
import com.julio.cifra_api.dto.DeezerServiceDTOs.SongDTO;
import com.julio.cifra_api.dto.ResponseCifraDTO;
import com.julio.cifra_api.entity.Artist;
import com.julio.cifra_api.entity.Cifra;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.exception.ResourceNotFoundException;
import com.julio.cifra_api.mapper.ArtistMapper;
import com.julio.cifra_api.mapper.SongMapper;
import com.julio.cifra_api.repositories.ArtistRepository;
import com.julio.cifra_api.repositories.CifraRepository;
import com.julio.cifra_api.repositories.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CifraService {
    private final CifraRepository cifraRepository;
    private final SongRepository songRepository;
    private final ArtistRepository artistRepository;
    private  final ArtistMapper artistMapper;

    private final DeezerService deezerService;
    private final SongMapper songMapper;

    public CifraService(CifraRepository cifraRepository, SongRepository songRepository, SongRepository songRepository1, ArtistRepository artistRepository, ArtistMapper artistMapper, DeezerService deezerService, SongMapper songMapper) {
        this.cifraRepository = cifraRepository;
        this.songRepository = songRepository;
        this.artistRepository = artistRepository;
        this.artistMapper = artistMapper;
        this.deezerService = deezerService;
        this.songMapper = songMapper;
    }

    public ResponseCifraDTO create(CreateCifraRequestDTO requestDTO) {
        Optional<Cifra> existing = cifraRepository.findByDeezerId(requestDTO.getDeezerId());

        Cifra cifra = existing.orElseGet(Cifra::new);

        cifra.setContent(requestDTO.getContent());
        cifra.setDeezerId(requestDTO.getDeezerId());

        return toDTO(cifraRepository.save(cifra));
    }

    public ResponseCifraDTO getCifraById(Long id) {
        Cifra cifra = cifraRepository.findById(id)
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
        return dto;
    }
}
