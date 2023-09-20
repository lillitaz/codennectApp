package com.lillitaz.codennect.model;

import lombok.Getter;

@Getter
public class UserSignUpRequest {
    private String email;

    private String userName;

    private String password;
}
