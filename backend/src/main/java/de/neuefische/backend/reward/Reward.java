package de.neuefische.backend.reward;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public record Reward(
        @Id
        String id,
        String name,
        String description,
        double price,
        double savingAllocated,
        boolean statusOpen,
        LocalDateTime rewardCreated
) {
}
