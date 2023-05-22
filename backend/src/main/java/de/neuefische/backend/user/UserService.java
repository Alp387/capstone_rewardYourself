package de.neuefische.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepoInterface userRepoInterface;

    public User getSingleUser(){
        return userRepoInterface.findById("646b5f4616040952fa8a5b39").orElseThrow();
    }
}
