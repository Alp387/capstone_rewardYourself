package de.neuefische.backend.habit;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/habits")
public class HabitController {
    private final HabitService habitService;

    @GetMapping
    public List<Habit> getAll() {
        return habitService.getAll();
    }

    @PostMapping("/add")
    public Habit add(@RequestBody Habit habit) {
        return habitService.add(habit);
    }
}