package com.fix.common.domain.configs;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class PackageConfig implements Serializable {

    private Long id;

    private String name;

    private CommonEnvConfig commonEnvConfig;

    private Platform platform;

    private CoreEngineConfig coreEngineConfig;

    private FilterEngineConfig filterEngineConfig;

    private String licenceUrl;

    private DatabaseConfig databaseConfig;

    private ModuleConfig[] moduleConfig;


}
