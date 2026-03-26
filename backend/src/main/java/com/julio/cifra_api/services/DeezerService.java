package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.DeezerServiceDTOs.DeezerSongResponseDTO;
import com.julio.cifra_api.dto.DeezerServiceDTOs.SongDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class DeezerService {
    private final WebClient webClient;

    public DeezerService(WebClient webClient) {
        this.webClient = webClient;
    }

    public DeezerSongResponseDTO searchSong(String title) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/search/track")
                        .queryParam("q", title)
                        .build())
                .retrieve()
                .bodyToMono(DeezerSongResponseDTO.class)
                .block();
    }

    public SongDTO getById(String deezerId) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/track/{id}")
                        .build(deezerId))
                .retrieve()
                .bodyToMono(SongDTO.class)
                .block();

    }
}
