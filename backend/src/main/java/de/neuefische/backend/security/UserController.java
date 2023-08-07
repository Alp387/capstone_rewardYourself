package de.neuefische.backend.security;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final MongoUserService mongoUserService;
    private final MongoUserRepoInterface mongoUserRepoInterface;

    private final PasswordEncoder passwordEncoder;

    @GetMapping("/me")
    public MongoUser getMyUserData(Authentication authentication) {
        String username = authentication.getName();
        return mongoUserService.findMongoUserByUsername(username);
    }

    @GetMapping("/{username}")
    public MongoUser loadMongoUserByName(@PathVariable String username) {
        return mongoUserService.findMongoUserByUsername(username);
    }

    @PostMapping("/login")
    public String login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/logout")
    public void logout(HttpSession httpSession) {
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
    }

    @PostMapping("/signup")
    public MongoUser signup(@RequestBody @Valid MongoUser user) {
        if (mongoUserRepoInterface.findMongoUserByUsername(user.username()).isPresent()) {
            throw new IllegalArgumentException(" Username already exists!");
        }
        String encodedPassword = passwordEncoder.encode(user.password());
        MongoUser newUser = new MongoUser(null, user.username(), user.password(), user.totalSaving());
        return mongoUserRepoInterface.save(newUser);
    }
}
