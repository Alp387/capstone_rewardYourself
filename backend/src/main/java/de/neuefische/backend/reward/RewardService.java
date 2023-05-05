package de.neuefische.backend.reward;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RewardService {
    private final RewardRepoInterface rewardRepoInterface;
    private final TimeUtilsService timeUtilsService;

    public List<Reward> getAll() {
        return rewardRepoInterface.findAll();
    }

    public Reward addReward(Reward reward) {

        Reward rewardToAdd = new Reward(reward.id(), reward.name(), reward.description(), reward.price(),
                0, true, timeUtilsService.addTimeStamp());
        return rewardRepoInterface.save(rewardToAdd);
    }

    public Reward getById(String id) {
        return rewardRepoInterface.findById(id).orElseThrow();
    }
}
