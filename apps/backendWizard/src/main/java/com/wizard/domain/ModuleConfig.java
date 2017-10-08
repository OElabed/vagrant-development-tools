package com.wizard.domain;

/**
 * Created by OELABED on 08/10/2017.
 */
public class ModuleConfig extends Config {

    private String name;

    private String version;

    private String packageUrl;

    private String configFileUrl;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getPackageUrl() {
        return packageUrl;
    }

    public void setPackageUrl(String packageUrl) {
        this.packageUrl = packageUrl;
    }

    public String getConfigFileUrl() {
        return configFileUrl;
    }

    public void setConfigFileUrl(String configFileUrl) {
        this.configFileUrl = configFileUrl;
    }
}
