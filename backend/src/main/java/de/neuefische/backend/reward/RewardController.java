package de.neuefische.backend.reward;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("{id}")
    public Reward getById(@PathVariable String id) {
        return rewardService.getById(id);
    }

    @PostMapping("/add")
    public Reward addReward(@RequestBody Reward reward) {
        return rewardService.addReward(reward);
    }


}
