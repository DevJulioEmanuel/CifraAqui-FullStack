package com.julio.cifra_api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "tb_cifra")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cifra {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false, unique = true)
    private String deezerId;

    @Column
    private String videoId;
}
