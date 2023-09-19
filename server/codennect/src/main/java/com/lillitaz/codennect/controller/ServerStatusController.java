package com.lillitaz.dockerizer.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/healthCheck")
public class ServerStatusController {

    @RequestMapping("/status")
    public String status() {
        return "Server is up and running";
    }
}
