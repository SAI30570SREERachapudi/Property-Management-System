package package1.controller;

import org.springframework.beans.factory.annotation.Autowired
;
import org.springframework.web.bind.annotation.*;

import package1.model.User;
import package1.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UserService userService;

    // Endpoint for user registration
    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        boolean isRegistered = userService.registerUser(user);
        if (isRegistered) {
            return "User registered successfully!";
        } else {
            return "Registration failed. User already exists!";
        }
    }

    // Endpoint for user login
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        boolean isLoggedIn = userService.loginUser(user);
        if (isLoggedIn) {
            return "Logged in successfully!";
        } else {
            return "Invalid email or password!";
        }
    }
}
