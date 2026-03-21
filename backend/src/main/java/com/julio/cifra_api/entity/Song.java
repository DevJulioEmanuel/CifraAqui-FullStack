package com.julio.cifra_api.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "tb_song")

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Song {
    @Id
    private Long id;

    @Column(nullable = false, unique = true)
    private String deezerId;

    @NotBlank
    @Column(nullable = false)
    private String title;

    @NotBlank
    @Column(nullable = false)
    private String artist;
}
