package com.julio.cifra_api.controller;

import com.julio.cifra_api.dto.ResponseSongDTO;
import com.julio.cifra_api.dto.SongDTO;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.services.SongService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.UUID;

@RestController
public class SongController {

    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @PostMapping("/songs")
    public ResponseEntity<ResponseSongDTO> create(@RequestBody @Valid Song song) {
        return ResponseEntity.status(201).body(songService.create(song));
    }

    @GetMapping("/songs/{id}")
    public ResponseEntity<ResponseSongDTO> getSongById(@PathVariable UUID id) {
        return ResponseEntity.ok(songService.getSongById(id));
    }

    @GetMapping("/songs")
    public ResponseEntity<List<ResponseSongDTO>> getAll() {
        return ResponseEntity.ok(songService.findAll());
    }

    @GetMapping("/search")
    public Mono<ResponseEntity<List<ResponseSongDTO>>> searchSong(@RequestBody String title) {
        return songService.searchSong(title).map(ResponseEntity::ok);
    }
}