package de.neuefische.backend.reward;

import org.springframework.data.annotation.Id;

import java.time.OffsetDateTime;

public record Reward(
        @Id
        String id,
        String name,
        String description,
        double price,
        double savingAllocated,
        boolean statusOpen,
        OffsetDateTime rewardCreated
) {
}
