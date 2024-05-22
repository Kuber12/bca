package com.example.bca.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomController {
    @GetMapping("/demo/hero")
    ResponseEntity<String> getVideo(){
        return ResponseEntity.ok("Video he re");
    }
}
