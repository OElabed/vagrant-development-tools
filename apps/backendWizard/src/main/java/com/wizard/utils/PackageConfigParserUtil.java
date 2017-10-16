package com.wizard.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.wizard.domain.PackageConfig;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PackageConfigParserUtil {

    private static ObjectMapper mapper = new ObjectMapper(new YAMLFactory());

    public static PackageConfig parsePackageConfigFromYaml(String filePath) {
        PackageConfig packageConfig = null;
        try {
            final File packageFileConfig = new File(filePath);
            packageConfig = mapper.readValue(packageFileConfig, PackageConfig.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return packageConfig;
    }

    public static String serializePackageConfigToYamlFile(PackageConfig packageConfig){
        String yamlString = null;
        try {
            yamlString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(packageConfig);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return yamlString;

    }

    public static PackageConfig parsePackageConfigFromContentString(String content) {
        PackageConfig packageConfig = null;
        try {
            packageConfig = mapper.readValue(content, PackageConfig.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return packageConfig;
    }
}
