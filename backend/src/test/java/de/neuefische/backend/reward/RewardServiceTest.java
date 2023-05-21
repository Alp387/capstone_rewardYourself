package de.neuefische.backend.reward;

import de.neuefische.backend.utlis.TimeUtilsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.OffsetDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc
@SpringBootTest
class RewardServiceTest {

    private RewardService rewardService;
    @Mock
    private RewardRepoInterface rewardRepoInterfaceMock;
    @Mock
    private TimeUtilsService timeUtilsService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        rewardService = new RewardService(rewardRepoInterfaceMock, timeUtilsService);
    }


    @Test
    void getAllRewards() {
        //GIVEN
        Reward reward1 = new Reward("1", "TV", "60 inch curved", 500.0,
                0.0, true, OffsetDateTime.now());
        Reward reward2 = new Reward("2", "E-Bike", "very sexy", 3500.0,
                0.0, true, OffsetDateTime.now());
        List<Reward> expectedRewards = Arrays.asList(reward1, reward2);
        //WHEN
        when(rewardRepoInterfaceMock.findAll()).thenReturn(expectedRewards);
        List<Reward> actualRewards = rewardService.getAll();
        //THEN
        assertEquals(actualRewards, expectedRewards);
    }

    @DirtiesContext
    @Test
    void addReward() {
        //GIVEN
        OffsetDateTime fixedDateTime = OffsetDateTime.parse("2007-12-03T10:15:30+01:00");
        Reward expectedReward = new Reward("1", "TV", "60 inch curved", 500.0,
                0.0, true, fixedDateTime);
        when(timeUtilsService.addNewTimeStamp()).thenReturn(fixedDateTime);
        when(rewardRepoInterfaceMock.save(expectedReward)).thenReturn(expectedReward);


        //WHEN
        Reward actualReward = rewardService.add(expectedReward);
        //THEN
        verify(rewardRepoInterfaceMock).save(expectedReward);
        assertEquals(expectedReward, actualReward);
    }

    @DirtiesContext
    @Test
    void addRewardSuccessful() {
        // GIVEN
        OffsetDateTime fixedDateTime = OffsetDateTime.parse("2007-12-03T10:15:30+01:00");
        Reward rewardToAdd = new Reward("1", "TV", "60 inch curved",
                500.0, 0.0, true, fixedDateTime);
        when(rewardRepoInterfaceMock.save(rewardToAdd)).thenReturn(rewardToAdd);
        when(timeUtilsService.addNewTimeStamp()).thenReturn(fixedDateTime);
        // WHEN
        Reward actualReward = rewardService.add(rewardToAdd);
        // THEN
        verify(rewardRepoInterfaceMock).save(rewardToAdd);
        assertNotNull(actualReward);
    }

    @DirtiesContext
    @Test
    void getRewardById_shouldReturnExistingReward() {
        //GIVEN
        Reward expectedReward = new Reward("1", "TV", "60 inch curved", 500.0,
                0.0, true, OffsetDateTime.now());
        when(rewardRepoInterfaceMock.findById(expectedReward.id())).thenReturn(Optional.of(expectedReward));
        //THEN
        Reward actualReward = rewardService.getById("1");
        verify(rewardRepoInterfaceMock).findById("1");
        assertEquals(expectedReward, actualReward);
    }


    @DirtiesContext
    @Test
    void getByIdShouldReturnErrorWhenIdNotExists() {
        //GIVEN
        when(rewardRepoInterfaceMock.findById("x")).thenThrow(NoSuchElementException.class);

        //WHEN
        try {
            rewardService.getById("x");
            fail();
        }
        //THEN
        catch (NoSuchElementException Ignored) {
            verify(rewardRepoInterfaceMock).findById("x");
        }
    }
}