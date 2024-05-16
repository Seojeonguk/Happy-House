package com.example.happyhouse.domain.controller;

import com.example.happyhouse.domain.service.ApiKeyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ApiKeyController {

    private final ApiKeyService apiKeyService;

    @PostMapping("/getGoogleApiKey")
    public String getGoogleMapApiKey() {
        return apiKeyService.provideGoogleMapApiKey();
    }
}