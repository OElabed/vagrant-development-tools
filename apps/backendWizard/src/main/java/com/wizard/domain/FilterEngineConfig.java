package com.wizard.domain;

/**
 * Created by OELABED on 08/10/2017.
 */
public class FilterEngineConfig extends Config {

    private String packageUrl;

    private String kzFileUrl;

    private String fmlFileUrl;

    private String scoreFileUrl;

    private String licenceUrl;

    public String getLicenceUrl() {
        return licenceUrl;
    }

    public void setLicenceUrl(String licenceUrl) {
        this.licenceUrl = licenceUrl;
    }

    public String getPackageUrl() {
        return packageUrl;
    }

    public void setPackageUrl(String packageUrl) {
        this.packageUrl = packageUrl;
    }

    public String getKzFileUrl() {
        return kzFileUrl;
    }

    public void setKzFileUrl(String kzFileUrl) {
        this.kzFileUrl = kzFileUrl;
    }

    public String getFmlFileUrl() {
        return fmlFileUrl;
    }

    public void setFmlFileUrl(String fmlFileUrl) {
        this.fmlFileUrl = fmlFileUrl;
    }

    public String getScoreFileUrl() {
        return scoreFileUrl;
    }

    public void setScoreFileUrl(String scoreFileUrl) {
        this.scoreFileUrl = scoreFileUrl;
    }
}
