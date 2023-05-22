package de.neuefische.backend.user;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepoInterface extends MongoRepository<User, String> {
}
