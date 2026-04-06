package com.julio.cifra_api.mapper;

import com.julio.cifra_api.dto.DeezerServiceDTOs.AlbumDTO;
import com.julio.cifra_api.entity.Album;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AlbumMapper {
    Album toEntity(AlbumDTO dto);

    AlbumDTO toDTO(Album entity);
}
