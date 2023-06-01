package de.neuefische.backend.reward;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/rewards")
public class RewardController {

    private final RewardService rewardService;

    @GetMapping
    public List<Reward> getAll() {
        return rewardService.getAll();
    }

    @GetMapping("/{id}")
    public Reward getById(@PathVariable String id) {
        return rewardService.getById(id);
    }

    @PostMapping("/add")
    public Reward add(@RequestBody Reward reward) {
        return rewardService.add(reward);
    }

    @PutMapping(path = {"/{id}/update", "{id}"})
    public Reward update(@PathVariable String id, @RequestBody Reward updatedReward) {
        if (updatedReward.id().equals(id)) {
            return rewardService.update(updatedReward);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Reward with id -" + updatedReward.id() + "- does not exist");
        }
    }

    @PutMapping(path = {"/{id}/spend", "{id}"})
    public Reward spendSaving(@PathVariable String id, @RequestBody double spendingAmount) {
        return rewardService.spendSaving(id, spendingAmount);
    }

    @DeleteMapping("{id}")
    public void deleteReward(@PathVariable String id) {
        rewardService.delete(id);
    }
}
