package com.julio.cifra_api.dto;

import com.julio.cifra_api.dto.DeezerServiceDTOs.ArtistDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ResponseSongDTO {
    private Long id;
    private String title;
    private String preview;
    private ArtistDTO artist;
}
