package com.julio.cifra_api.mapper;

import com.julio.cifra_api.dto.DeezerServiceDTOs.SongDTO;
import com.julio.cifra_api.entity.Song;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {ArtistMapper.class})
public interface SongMapper {
    SongDTO toDTO(Song song);
}
