package com.wizard.domain;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PackageConfig extends Config {

    private String name;

    private String basePath;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBasePath() {
        return basePath;
    }

    public void setBasePath(String basePath) {
        this.basePath = basePath;
    }
}
