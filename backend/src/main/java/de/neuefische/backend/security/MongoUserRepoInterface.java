package de.neuefische.backend.security;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MongoUserRepoInterface extends MongoRepository<MongoUser,String> {
    Optional<MongoUser> findMongoUserByUsername(String userName);

}
