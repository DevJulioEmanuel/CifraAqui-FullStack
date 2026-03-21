package com.julio.cifra_api.services;

import com.julio.cifra_api.dto.DeezerServiceDTOs.DeezerSongResponseDTO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@Setter
@Getter
public class DeezerService {
    private final WebClient webClient;

    public DeezerService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Mono<DeezerSongResponseDTO> searchSong(String tittle) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/search/track")
                        .queryParam("q", tittle)
                        .build())
                .retrieve()
                .bodyToMono(DeezerSongResponseDTO.class);
    }
}
