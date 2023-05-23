package de.neuefische.backend.reward;

import de.neuefische.backend.user.UserService;
import de.neuefische.backend.utlis.TimeUtilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RewardService {
    private final RewardRepoInterface rewardRepoInterface;
    private final TimeUtilsService timeUtilsService;
    private final UserService userService;

    public List<Reward> getAll() {
        return rewardRepoInterface.findAll();
    }

    public Reward add(Reward reward) {
        Reward rewardToAdd = new Reward(
                reward.id(),
                reward.name(),
                reward.description(),
                reward.price(),
                0,
                true,
                timeUtilsService.addNewTimeStamp());
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
                updatedReward.rewardCreated());

        return rewardRepoInterface.save(updatedRewardToSave);
    }
    public void delete(String id){ rewardRepoInterface.deleteById(id);}

    public Reward spendSaving(String id, double spendingAmount) {
        Reward oldReward = rewardRepoInterface.findById(id).orElseThrow();
                userService.spendSaving("646b5f4616040952fa8a5b39",spendingAmount);
        return  rewardRepoInterface.save(new Reward(
                        id,
                        oldReward.name(),
                        oldReward.description(),
                        oldReward.price(),
                        oldReward.savingAllocated() + spendingAmount,
                        oldReward.statusOpen(),
                        oldReward.rewardCreated()));
    }
}
