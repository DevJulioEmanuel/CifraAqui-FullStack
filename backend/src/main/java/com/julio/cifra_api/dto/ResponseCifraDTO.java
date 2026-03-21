package com.julio.cifra_api.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ResponseCifraDTO {
    private UUID id;
    private String content;
    private SongDTO song;
}
