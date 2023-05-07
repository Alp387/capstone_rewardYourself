package de.neuefische.backend.reward;

import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addFormatter(FormatterRegistry registry){
        registry.addConverter(new DateToOffsetDateTimeConverter());
    }
}
