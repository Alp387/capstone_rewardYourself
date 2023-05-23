package de.neuefische.backend.habit;

import de.neuefische.backend.user.UserService;
import de.neuefische.backend.utlis.TimeUtilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@RequiredArgsConstructor
@Service
public class HabitService {
    private final HabitRepoInterface habitRepoInterface;
    private final TimeUtilsService timeutilsService;
    private final UserService userService;

    public List<Habit> getAll() {
        return habitRepoInterface.findAll();
    }

    public Habit getById(String id) {
        return habitRepoInterface.findById(id).orElseThrow();
    }

    public Habit add(Habit habit) {
        Habit habitToAdd = new Habit(
                habit.id(),
                habit.name(),
                habit.description(),
                habit.dailySaving(),
                timeutilsService.addNewTimeStamp(),
                null, /* Initialwert startTime*/
                null,
                true
        );
        return habitRepoInterface.save(habitToAdd);
    }

    public Habit update(Habit updatedHabit) {
        Habit updatedHabitToSave = new Habit(updatedHabit.id(),
                updatedHabit.name(),
                updatedHabit.description(),
                updatedHabit.dailySaving(),
                updatedHabit.startTime(),
                updatedHabit.lastTimeCollected(),
                updatedHabit.endTime(),
                updatedHabit.statusOpen());

        return habitRepoInterface.save(updatedHabitToSave);
    }

    public Habit collectSaving(String id) {
        OffsetDateTime currentTime = OffsetDateTime.now();
        Habit habitCollect = habitRepoInterface.findById(id).orElseThrow();
        long timeDifference = currentTime.until(habitCollect.startTime(), ChronoUnit.HOURS);
        double savingToCollect = timeDifference * habitCollect.dailySaving() / 24;
        Habit updatedHabit = new Habit(
                habitCollect.id(),
                habitCollect.name(),
                habitCollect.description(),
                habitCollect.dailySaving(),
                habitCollect.startTime(),
                currentTime,
                habitCollect.endTime(),
                habitCollect.statusOpen());
        habitRepoInterface.save(updatedHabit);
        userService.updateTotalSaving("646b5f4616040952fa8a5b39", savingToCollect);
        return updatedHabit;
    }

    public void delete(String id) {
        habitRepoInterface.deleteById(id);
    }
}
