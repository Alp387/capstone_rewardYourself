package de.neuefische.backend.habit;

import org.springframework.data.annotation.Id;

import java.time.OffsetDateTime;

public record Habit(
        @Id
        String id,
        String name,
        String description,
        double dailySaving,
        OffsetDateTime startTime,
        OffsetDateTime lastTimeCollected,
        OffsetDateTime endTime,
        boolean statusOpen

) {
}
