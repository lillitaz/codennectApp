package com.lillitaz.codennect.service;

import com.lillitaz.codennect.model.Project;
import com.lillitaz.codennect.model.User;
import com.lillitaz.codennect.model.UserUpdateRequest;
import com.lillitaz.codennect.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    private final UserService userService;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, UserService userService) {
        this.projectRepository = projectRepository;
        this.userService = userService;
    }

    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    @Transactional
    public Project createProject(Project project) {
        // Find the owner user
        User owner = userService.findUserById(project.getOwnerId());

        // Ensure the owner user is managed by Hibernate
        userService.updateUser(owner);

        // Add the project to the owner's list of projects
        owner.getProjects().add(project);

        // Save the project and update the owner user
        project = projectRepository.save(project);

        // Ensure the owner user is updated in the database
        userService.updateUser(owner);

        return project;
    }


    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }

    public Project addUserToProject(Long projectId, Long userId) {
        Optional<Project> optionalProject = projectRepository.findById(projectId);

        if (optionalProject.isPresent()) {
            Project project = optionalProject.get();
            User user = userService.findUserById(userId);

            project.getContributors().add(user);

            return projectRepository.save(project);
        } else {
            throw new NullPointerException("Project not found with ID: " + projectId);
        }
    }
}
