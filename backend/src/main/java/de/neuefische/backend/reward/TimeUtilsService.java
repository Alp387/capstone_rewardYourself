package de.neuefische.backend.reward;

import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;

@Service
public class TimeUtilsService {

    public OffsetDateTime addNewTimeStamp() {
        return OffsetDateTime.now();
    }
}
