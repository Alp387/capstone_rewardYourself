package de.neuefische.backend.habit;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @GetMapping("/{id}")
    public Habit getById(@PathVariable String id) {
        return habitService.getById(id);
    }

    @PostMapping("/add")
    public Habit add(@RequestBody Habit habit) {
        return habitService.add(habit);
    }

    @PutMapping(path = {"/{id}/update", "{id}"})
    public Habit update(@PathVariable String id, @RequestBody Habit updatedHabit) {
        if (updatedHabit.id().equals(id)) {
            return habitService.update(updatedHabit);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Habit with id -" + updatedHabit.id() + "- does not exist");
        }
    }
    @PutMapping(path = {"/{id}/collect","{id}"})
    public Habit collectSaving (@PathVariable String id){
        return habitService.collectSaving(id);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        habitService.delete(id);
    }
}