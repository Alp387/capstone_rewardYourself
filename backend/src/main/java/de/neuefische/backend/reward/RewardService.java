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

    public Reward add(Reward reward) {
        Reward rewardToAdd = new Reward(reward.id(), reward.name(), reward.description(), reward.price(),
                0, true, timeUtilsService.addTimeStamp());
        return rewardRepoInterface.save(rewardToAdd);
    }

    public Reward getById(String id) {
        return rewardRepoInterface.findById(id).orElseThrow();
    }

    public Reward update(Reward updatedReward) {
        Reward updatedRewardToSave = new Reward(updatedReward.id(),
                updatedReward.name(),
                updatedReward.description(),
                updatedReward.price(),
                updatedReward.savingAllocated(),
                updatedReward.statusOpen(),
                //take over old TimeStamp
                timeUtilsService.transferTimeStamp(updatedReward.rewardCreated().toString()));

        /* not sure right now if the save method overrides th old version
        //delete old Reward from Database
        rewardRepoInterface.delete(updatedReward);
        */

        //add new Reward to Database
        return rewardRepoInterface.save(updatedRewardToSave);
    }
}
