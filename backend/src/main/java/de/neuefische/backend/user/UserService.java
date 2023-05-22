package de.neuefische.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepoInterface userRepoInterface;

    public User getSingleUser(){
        return userRepoInterface.findById("1").orElseThrow();
    }
}
