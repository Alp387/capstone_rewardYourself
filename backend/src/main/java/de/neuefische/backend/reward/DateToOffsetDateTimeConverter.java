package de.neuefische.backend.reward;

import org.bson.json.Converter;
import org.bson.json.StrictJsonWriter;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Date;

public class DateToOffsetDateTimeConverter implements Converter<Date, OffsetDateTime> {

    public OffsetDateTime convert(Date source){
        return source.toInstant().atOffset(ZoneOffset.UTC);
    }

    @Override
    public void convert(Date date, StrictJsonWriter strictJsonWriter) {

    }
}
