package com.fix.common.domain.configs;

import lombok.Data;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class ModuleConfig {

    private String name;

    private String type;

    private String archiveUrl;

    private Version version;
}
