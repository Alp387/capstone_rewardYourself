package de.neuefische.backend.habit;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HabitService {
    private final HabitRepoInterface habitRepoInterface;

    public List<Habit> getAll() {
        return habitRepoInterface.findAll();
    }

}
