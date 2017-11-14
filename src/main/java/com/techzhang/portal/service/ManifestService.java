package com.techzhang.portal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class ManifestService {

    private static final Logger logger = LoggerFactory.getLogger(ManifestService.class);

    @Autowired
    private ObjectMapper objectMapper;

    private Map<String, String> data;

    @PostConstruct
    public void init() {
        try {
            InputStream stream = new ClassPathResource("static/js/manifest.json").getInputStream();
            data = objectMapper.readValue(stream, new TypeReference<HashMap<String, String>>() {});
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

    public Map<String, String> getData() {
        return data;
    }

    public void setData(Map<String, String> data) {
        this.data = data;
    }

}