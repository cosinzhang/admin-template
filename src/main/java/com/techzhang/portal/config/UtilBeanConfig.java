package com.techzhang.portal.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by zhanghaijun on 2017/11/14.
 */
@Configuration
public class UtilBeanConfig {

    @Bean
    public ObjectMapper initObjectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        //允许null
        objectMapper.configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
        //允许 unknown 属性
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return objectMapper;
    }


}
