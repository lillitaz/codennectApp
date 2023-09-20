package com.lillitaz.codennect.controller;

import com.lillitaz.codennect.model.User;
import com.lillitaz.codennect.model.UserLoginRequest;
import com.lillitaz.codennect.model.UserUpdateRequest;
import com.lillitaz.codennect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserDataController {
    private final UserService userService;
    private final UserUpdateRequest userUpdateRequest;
    @Autowired
    public UserDataController(UserService userService, UserUpdateRequest userUpdateRequest) {
        this.userService = userService;
        this.userUpdateRequest = userUpdateRequest;
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{userName}")
    public User getUserByUserName(@PathVariable String userName) {
        return userService.findUserByUserName(userName);
    }

    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody User user) {
        return userService.createUser(user, "USER");
    }
    @PostMapping("/login")
    String login(UserLoginRequest userLoginRequest) {
        return "yes";
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<String> updateUserById(@PathVariable Long userId, @RequestBody UserUpdateRequest userUpdateRequest) {
        return userService.updateUserById(userId, userUpdateRequest);
    }

    @DeleteMapping("/delete/{userId}")
    public String delete(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return "user successfully deleted";
    }
}
