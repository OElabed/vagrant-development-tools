package com.fix.model.dto.configs;

import lombok.Data;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class FilterEngineConfig {

     private String scoreFileUrl;

    private String fmlFile1Url;

    private String licenceFileUrl;

    private String fmlFile2Url;

    private String archiveUrl;

    private String kzFileUrl;

    private Version version;
}
