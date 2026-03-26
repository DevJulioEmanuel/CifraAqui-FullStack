package com.julio.cifra_api.dto.DeezerServiceDTOs;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class DeezerSongResponseDTO {
    private List<SongDTO> data;
}
