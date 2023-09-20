package com.lillitaz.codennect.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/server")
public class ServerStatusController {

    @RequestMapping("/healthCheck")
    public String status() {
        return "Server is up and running";
    }
}
