package de.neuefische.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class UserService {
    private final MongoUserRepoInterface mongoUserRepoInterface;

    public MongoUser findUserByUsername(String username) {
        return mongoUserRepoInterface.findMongoUserByUsername(username)
                .orElseThrow(NoSuchElementException::new);
    }
}
