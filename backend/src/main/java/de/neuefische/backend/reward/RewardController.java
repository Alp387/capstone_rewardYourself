package de.neuefische.backend.reward;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/rewards")
public class RewardController {

    private final RewardService rewardService;

    @GetMapping
    public List<Reward> getAll() {return rewardService.getAll();}


}
