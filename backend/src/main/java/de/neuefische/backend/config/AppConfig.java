package de.neuefische.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppConfig {

    @Bean
    public DateToOffsetDateTime dateToOffsetDateTimeConverter() {
        return new DateToOffsetDateTime();
    }

    @Bean
    public OffsetDateTimeToDate offsetDateTimeToDateConverter() {
        return new OffsetDateTimeToDate();
    }

    @Bean
    public MongoCustomConversions mongoCustomConversions() {
        List<Converter<?, ?>> converters = new ArrayList<>();
        converters.add(dateToOffsetDateTimeConverter());
        converters.add(offsetDateTimeToDateConverter());
        return new MongoCustomConversions(converters);
    }

}
