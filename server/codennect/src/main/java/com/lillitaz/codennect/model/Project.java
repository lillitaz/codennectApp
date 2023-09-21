package com.lillitaz.codennect.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;
    @Column(unique = true)
    private Long ownerId;
    private String description;
    private String projectName;
    @ManyToMany(fetch = FetchType.LAZY)
    private List<User> contributors;

}

