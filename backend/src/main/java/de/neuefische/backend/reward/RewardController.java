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
    public List<Reward> getAll() {return rewardService.getAll();}

    @PostMapping
    public Reward addReward(@RequestBody Reward reward){return rewardService.addReward(reward);}

}
