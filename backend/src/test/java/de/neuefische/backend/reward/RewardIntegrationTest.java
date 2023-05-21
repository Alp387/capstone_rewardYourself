package de.neuefische.backend.reward;

import de.neuefische.backend.utlis.TimeUtilsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RewardIntegrationTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    TimeUtilsService timeUtilsService;
    @Autowired
    RewardRepoInterface rewardRepoInterfaceMock;

    @Test
    void getAllRewards_shouldReturnEmptyList() throws Exception {
        mockMvc.perform(get("/api/rewards"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                []
                                """
                ));
    }

    @Test
    @DirtiesContext
    void addReward_shouldReturnAddedReward() throws Exception {
        mockMvc.perform(post("/api/rewards/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "5",
                                "name": "Kaffee",
                                "description": "beste wo gibt",
                                "price": 10.0,
                                "savingAllocated": 0.0,
                                "statusOpen": true,
                                "rewardCreated": "2023-05-01T22:09:51"
                                }
                                """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "id": "5",
                                "name": "Kaffee",
                                "description": "beste wo gibt",
                                "price": 10.0,
                                "savingAllocated": 0.0,
                                "statusOpen": true,
                                "rewardCreated": "2023-05-01T22:09:51"
                                }
                                """
                ));
    }
}
