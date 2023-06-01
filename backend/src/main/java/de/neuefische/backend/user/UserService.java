package de.neuefische.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepoInterface userRepoInterface;

    public User getSingleUser() {
        return userRepoInterface.findById("6477a4b984a906988b45ffce").orElseThrow();
    }

    public void updateTotalSaving(String userId, double amount) {
        User userToUpdate = userRepoInterface.findById(userId).orElseThrow();
        userRepoInterface.save
                (new User(userId,
                        userToUpdate.name(),
                        userToUpdate.totalSaving() + amount));
    }

    public void spendSaving(String userId, double spendingAmount) {
        User userToUpdate = userRepoInterface.findById(userId).orElseThrow();
        userRepoInterface.save(new User(userId,
                userToUpdate.name(),
                userToUpdate.totalSaving() - spendingAmount));
    }
}
