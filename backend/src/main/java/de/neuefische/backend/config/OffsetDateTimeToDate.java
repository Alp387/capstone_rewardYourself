package de.neuefische.backend.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import java.time.OffsetDateTime;
import java.util.Date;

@Component
public class OffsetDateTimeToDate implements Converter<OffsetDateTime, Date> {

    @Override
    public Date convert(OffsetDateTime offsetDateTime) {
        return Date.from(offsetDateTime.toInstant());
    }
}
