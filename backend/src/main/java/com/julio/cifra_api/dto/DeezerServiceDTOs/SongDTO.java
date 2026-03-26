package com.julio.cifra_api.dto.DeezerServiceDTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class SongDTO {
    private Long id;
    private String title;
    private String preview;
    private ArtistDTO artist;
}
