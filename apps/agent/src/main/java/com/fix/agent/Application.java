package com.fix.agent;

import com.fix.common.utils.OsUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import java.util.HashMap;
import java.util.Map;

@EnableEurekaClient
@SpringBootApplication
public class Application {

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(Application.class);

        Map<String, Object> defaultProperties = new HashMap<>();

        defaultProperties.put("platform.os", OsUtils.getOsName());
        defaultProperties.put("platform.id", "instance_1");

        app.setDefaultProperties(defaultProperties);
        app.run(args);
    }
}
