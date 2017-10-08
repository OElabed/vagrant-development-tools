package com.wizard.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.wizard.domain.FileConfig;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class ConfigFileParserUtil {

    private static ObjectMapper mapper = new ObjectMapper(new YAMLFactory());

    public static FileConfig parseFileConfigFromYaml(String filePath) {
        FileConfig fileConfig = null;
        try {
            final File packageFileConfig = new File(filePath);
            fileConfig = mapper.readValue(packageFileConfig, FileConfig.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return fileConfig;
    }

    public static String serializeFileConfigToYamlFile(FileConfig fileConfig){
        String yamlString = null;
        try {
            yamlString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(fileConfig);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return yamlString;

    }
}
