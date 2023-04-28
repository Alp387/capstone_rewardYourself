package de.neuefische.backend.reward;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc
@SpringBootTest
class RewardServiceTest {

    private RewardService rewardService;
    @Mock
    private RewardRepoInterface rewardRepoInterfaceMock;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        rewardService = new RewardService(rewardRepoInterfaceMock);
    }


    @Test
    void testGetAllRewards() {
        //GIVEN
        Reward reward1 = new Reward("1", "TV", "60 inch curved", 500.0,
                0.0, true, LocalDateTime.now());
        Reward reward2 = new Reward("2", "E-Bike", "very sexy", 3500.0,
                0.0, true, LocalDateTime.now());
        List<Reward> expectedRewards = Arrays.asList(reward1, reward2);
        //WHEN
        when(rewardRepoInterfaceMock.findAll()).thenReturn(expectedRewards);
        List<Reward> actualRewards = rewardService.getAll();
        //THEN
        assertEquals(actualRewards, expectedRewards);

    }

}