package de.neuefische.backend.reward;

import org.springframework.data.annotation.Id;

import java.time.ZonedDateTime;

public record Reward(
        @Id
        String rewardID,
        String name,
        String description,
        double price,
        double savingAllocated,
        boolean statusOpen,
        ZonedDateTime rewardCreated
) {
}
