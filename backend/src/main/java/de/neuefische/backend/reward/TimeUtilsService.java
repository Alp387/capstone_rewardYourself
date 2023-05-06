package de.neuefische.backend.reward;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TimeUtilsService {

    public LocalDateTime addTimeStamp() {
        return LocalDateTime.now();
    }
    public LocalDateTime transferTimeStamp (String oldTimeStamp){
        return LocalDateTime.parse(oldTimeStamp);
    }
}
