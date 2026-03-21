package com.julio.cifra_api.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ResponseSongDTO {
    private UUID id;
    private String title;
    private String artist;
}
