package de.neuefische.backend.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class MongoUserService implements UserDetailsService {
    private final MongoUserRepoInterface mongoUserRepoInterface;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = mongoUserRepoInterface.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with name " + username + " not found."));

        return new User(mongoUser.username(), mongoUser.password(), Collections.emptyList());
    }

    public MongoUser findMongoUserByUsername(String username) {
        return mongoUserRepoInterface.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with name " + username + " not found."));
    }

    public MongoUser getAuthenticatedUser() {
        return findMongoUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    public void updateTotalSaving(String userId, double amount) {
        MongoUser userToUpdate = mongoUserRepoInterface.findById(userId).orElseThrow();
        mongoUserRepoInterface.save
                (new MongoUser(userId,
                        userToUpdate.username(), userToUpdate.password(),
                        userToUpdate.totalSaving() + amount));
    }

    public void spendSaving(String userId, double spendingAmount) {
        MongoUser userToUpdate = mongoUserRepoInterface.findById(userId).orElseThrow();
        mongoUserRepoInterface.save(new MongoUser(userId,
                userToUpdate.username(), userToUpdate.password(),
                userToUpdate.totalSaving() - spendingAmount));
    }
}
