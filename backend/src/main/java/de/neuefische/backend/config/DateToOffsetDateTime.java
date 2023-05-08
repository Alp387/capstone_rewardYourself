package de.neuefische.backend.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Component
public class DateToOffsetDateTime implements Converter<Date, OffsetDateTime> {

    @Override
    public OffsetDateTime convert(Date date) {
        return date.toInstant().atOffset(ZoneOffset.UTC);
    }
}
