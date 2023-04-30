package de.neuefische.backend.reward;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class RewardService {
    private final RewardRepoInterface rewardRepoInterface;

    public List<Reward> getAll() {
        return rewardRepoInterface.findAll();
    }

    public Reward addReward(Reward reward) {

        Reward rewardToAdd = new Reward(reward.rewardId(), reward.name(), reward.description(), reward.price(),
                reward.savingAllocated(), reward.statusOpen(), LocalDateTime.now());
        return rewardRepoInterface.save(rewardToAdd);
    }
}
