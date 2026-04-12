package com.julio.cifra_api.controller;

import com.julio.cifra_api.dto.CreateCifraRequestDTO;
import com.julio.cifra_api.dto.ResponseCifraDTO;
import com.julio.cifra_api.services.CifraService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CifraController {
    private final CifraService cifraService;

    public CifraController(CifraService cifraService) {
        this.cifraService = cifraService;
    }

    @GetMapping("/cifras")
    public ResponseEntity<List<ResponseCifraDTO>> getCifras() {
        return ResponseEntity.ok(cifraService.findAll());
    }

    @GetMapping("/cifras/{id}")
    public ResponseEntity<ResponseCifraDTO> getCifraById(@PathVariable Long id) {
        return ResponseEntity.ok(cifraService.getCifraById(id));
    }

    @GetMapping("/cifras/deezer/{id}")
    public ResponseEntity<ResponseCifraDTO> getCifraByDeezerId(@PathVariable String id) {
        return ResponseEntity.ok(cifraService.getCifraByDeezerId(id));
    }

    @PostMapping("/cifras")
    public ResponseEntity<ResponseCifraDTO> create(@RequestBody CreateCifraRequestDTO requestDTO) {
        return ResponseEntity.status(201).body(cifraService.create(requestDTO));
    }
}
