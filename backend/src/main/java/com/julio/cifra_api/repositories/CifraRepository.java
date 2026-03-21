package com.julio.cifra_api.repositories;

import com.julio.cifra_api.entity.Cifra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CifraRepository extends JpaRepository<Cifra, UUID> {
}
