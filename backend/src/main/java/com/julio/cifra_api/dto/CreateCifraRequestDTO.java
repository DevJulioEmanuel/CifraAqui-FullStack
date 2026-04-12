package com.julio.cifra_api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateCifraRequestDTO {
    private String content;
    private String deezerId;
    private String videoId;
}
