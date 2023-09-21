package com.lillitaz.codennect.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "codennect_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column(unique = true)
    private String userName;
    @Column(unique = true)
    private String email;
    private String password;
    @OneToMany(fetch = FetchType.LAZY)
    private List<Project> projects;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> authorities;

}
