package com.fix.common.domain.configs;

import lombok.Data;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class DatabaseConfig {
    private String port;

    private DatabaseType type;

    private String username;

    private String service;

    private String hostname;

    private String password;

}
