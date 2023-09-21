package com.lillitaz.codennect.controller;

import com.lillitaz.codennect.model.Project;
import com.lillitaz.codennect.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    private final ProjectService projectService;
    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
    @GetMapping("/allProjects")
    public List<Project> getAllProjects() {
        return projectService.findAllProjects();
    }

    @PostMapping("/createProject")
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @DeleteMapping("/delete/{projectId}")
    public String delete(@PathVariable Long projectId) {
        projectService.deleteProject(projectId);
        return "project successfully deleted";
    }

    @PatchMapping("/addUserToProject/{projectId}")
    public Project addUserToProject(@PathVariable Long projectId, @RequestBody Map<String, Long> request) {
        Long userId = request.get("userId");
        return projectService.addUserToProject(projectId, userId);
    }
}
