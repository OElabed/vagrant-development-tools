package com.fix.model.dto;

import com.fix.model.dto.configs.PackageConfig;
import lombok.Data;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
public class TemplatePackage {

    private String id;

    private PackageConfig packageConfig;

    private String name;
}
