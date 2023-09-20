package com.lillitaz.codennect.model;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
@Getter
public class UserUpdateRequest {

    private String userName;

    private String email;

    private String newPassword;

    private String oldPassword;
}
