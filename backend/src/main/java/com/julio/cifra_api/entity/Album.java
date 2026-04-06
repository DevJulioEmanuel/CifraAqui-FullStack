package com.julio.cifra_api.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="album")
public class Album {
    @Id
    private Long id;

    @Column
    String title;

    @Column(columnDefinition = "TEXT")
    String cover;
}
