package de.neuefische.backend.habit;

import de.neuefische.backend.utlis.TimeUtilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HabitService {
    private final HabitRepoInterface habitRepoInterface;
    private final TimeUtilsService timeutilsService;


    public List<Habit> getAll() {
        return habitRepoInterface.findAll();
    }

    public Habit getById(String id){
        return habitRepoInterface.findById(id).orElseThrow();
    }

    public Habit add(Habit habit) {
        Habit habitToAdd = new Habit(
                habit.id(),
                habit.name(),
                habit.description(),
                habit.dailySaving(),
                timeutilsService.addNewTimeStamp(),
                null,
                null,
                true
        );
        return habitRepoInterface.save(habitToAdd);
    }
}
