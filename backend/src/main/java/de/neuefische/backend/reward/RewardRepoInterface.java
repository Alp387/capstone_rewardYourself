package de.neuefische.backend.reward;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RewardRepoInterface extends MongoRepository<Reward, String> {
}
