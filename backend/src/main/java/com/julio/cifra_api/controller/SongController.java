package com.julio.cifra_api.controller;

import com.julio.cifra_api.dto.ResponseSongDTO;
import com.julio.cifra_api.entity.Song;
import com.julio.cifra_api.services.SongService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<ResponseSongDTO> getSongById(@PathVariable Long id) {
        return ResponseEntity.ok(songService.getSongById(id));
    }

    @GetMapping("/songs")
    public ResponseEntity<List<ResponseSongDTO>> getAll() {
        return ResponseEntity.ok(songService.findAll());
    }

    @GetMapping("/search/{title}")
    public ResponseEntity<List<ResponseSongDTO>> searchSong(@PathVariable String title) {
        return ResponseEntity.ok(songService.searchSong(title));
    }

    @GetMapping("/search/track/{id}")
    public ResponseEntity<ResponseSongDTO> searchSongById(@PathVariable String id) {
        return ResponseEntity.ok(songService.searchSongById(id));
    }


}