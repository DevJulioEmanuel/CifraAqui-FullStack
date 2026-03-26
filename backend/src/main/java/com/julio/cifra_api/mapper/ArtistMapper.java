package com.julio.cifra_api.mapper;

import com.julio.cifra_api.dto.DeezerServiceDTOs.ArtistDTO;
import com.julio.cifra_api.entity.Artist;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ArtistMapper {
    Artist toEntity(ArtistDTO dto);

    ArtistDTO toDTO(Artist entity);
}
