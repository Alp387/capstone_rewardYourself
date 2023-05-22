package de.neuefische.backend.user;

import org.springframework.data.annotation.Id;

public record User(

        @Id
        String id,
        String name,
        double totalSaving
) {
}
