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

        Reward rewardToAdd = new Reward(reward.id(), reward.name(), reward.description(), reward.price(),
                0, true, LocalDateTime.now());
        return rewardRepoInterface.save(rewardToAdd);
    }

    public Reward getById(String id) {
        return rewardRepoInterface.findById(id).orElseThrow();
    }
}
