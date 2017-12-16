package com.fix.model.dto;

import com.fix.common.domain.configs.PackageConfig;

/**
 * Created by OELABED on 10/12/2017.
 */
public class TemplatePackage {

    private Long id;
    private PackageConfig packageConfig;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PackageConfig getPackageConfig() {
        return packageConfig;
    }

    public void setPackageConfig(PackageConfig packageConfig) {
        this.packageConfig = packageConfig;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public TemplatePackage(){

    }

}
