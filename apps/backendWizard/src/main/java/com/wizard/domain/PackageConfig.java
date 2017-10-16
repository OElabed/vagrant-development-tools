package com.wizard.domain;

import java.util.List;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PackageConfig extends Config{

    private PackageDefinitionConfig packageDefinition;

    private CoreEngineConfig coreEngine;

    private FilterEngineConfig filterEngine;

    private List<ModuleConfig> modules;

    public CoreEngineConfig getCoreEngine() {
        return coreEngine;
    }

    public void setCoreEngine(CoreEngineConfig coreEngine) {
        this.coreEngine = coreEngine;
    }

    public FilterEngineConfig getFilterEngine() {
        return filterEngine;
    }

    public void setFilterEngine(FilterEngineConfig filterEngine) {
        this.filterEngine = filterEngine;
    }

    public List<ModuleConfig> getModules() {
        return modules;
    }

    public void setModules(List<ModuleConfig> modules) {
        this.modules = modules;
    }

    public PackageDefinitionConfig getPackageDefinition() {
        return packageDefinition;
    }

    public void setPackageDefinition(PackageDefinitionConfig packageDefinition) {
        this.packageDefinition = packageDefinition;
    }
}
