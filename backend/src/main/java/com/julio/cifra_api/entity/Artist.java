package com.julio.cifra_api.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="artist")
public class Artist {
    @Id
    private Long id;

    @Column
    String name;

    @Column(columnDefinition = "TEXT")
    String picture;
}
