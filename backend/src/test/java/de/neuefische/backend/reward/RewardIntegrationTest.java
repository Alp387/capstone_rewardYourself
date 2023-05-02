package de.neuefische.backend.reward;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RewardIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    RewardRepoInterface rewardRepoInterfaceMock;

    @Test
    @DirtiesContext
    void getAllRewards_shouldReturnEmptyList() throws Exception {
        mockMvc.perform(get("/api/rewards"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                []
                                """
                ));


    }
}
