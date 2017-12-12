package com.fix.common.domain.configs;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class CommonEnvConfig implements Serializable {

    private Boolean enable;

    private String fileUrl;
}
