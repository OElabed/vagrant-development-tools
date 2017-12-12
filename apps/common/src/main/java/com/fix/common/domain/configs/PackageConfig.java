package com.fix.common.domain.configs;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.io.Serializable;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class PackageConfig implements Serializable {

	private static final long serialVersionUID = 1L;

	@JsonIgnore
	private Long id;

    private String uuid;

    private String name;

    private CommonEnvConfig commonEnvConfig;

    private Platform platform;

    private CoreEngineConfig coreEngineConfig;

    private FilterEngineConfig filterEngineConfig;

    private String licenceUrl;

    private DatabaseConfig databaseConfig;

    private ModuleConfig[] moduleConfig;

}
