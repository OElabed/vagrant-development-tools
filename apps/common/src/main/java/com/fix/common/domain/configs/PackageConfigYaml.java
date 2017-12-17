package com.fix.common.domain.configs;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * Created by OELABED on 17/12/2017.
 */
@Data
public class PackageConfigYaml {

    private Long id;

    @NotNull
    @NotEmpty
    private String content;
}
