package com.lillitaz.codennect.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
public class UserUpdateRequest {

    private String userName;

    private String email;

    private String newPassword;

    private String oldPassword;

    private List<Project> projects;
}
