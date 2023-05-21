package de.neuefische.backend.habit;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HabitRepoInterface extends MongoRepository<Habit, String> {
}
