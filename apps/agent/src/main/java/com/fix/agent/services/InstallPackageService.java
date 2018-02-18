package com.fix.agent.services;

import com.fix.agent.commands.InstallCoreEngineCommand;
import com.fix.agent.commands.InstallFilterEngineCommand;
import com.fix.agent.commands.InstallModuleCommand;
import com.fix.agent.commands.PreparePackageFolderCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.IdentifierGeneratorUtils;
import com.fix.common.domain.configs.ModuleConfig;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
@Service
public class InstallPackageService {

    private static final String PACKAGE_DEFAULT_CONFIG_PATH = "conf/package-default.yml";

    @Value("${workspace.path}")
    private String workspacePath;

    public void installAllPackage(PackageConfig configFile){
        try {
            // prepare
            String baseUrl = preparePackageFolder(configFile);
            // install FilterEngine
            installFilterEngine(configFile, baseUrl);
            // install CE
            installCoreEngine(configFile, baseUrl);
            // install Modules
            installModules(configFile, baseUrl);

        } catch (CommandEndedAbnormallyException | IOException exp) {
            exp.printStackTrace();
        }
    }

    private String preparePackageFolder(PackageConfig config) throws IOException, CommandEndedAbnormallyException {
        String folderId = IdentifierGeneratorUtils.generateUUID();
        String basePath = workspacePath + File.separator + folderId;
        config.setBasePath(basePath);
        Command packageConfigCommand = new PreparePackageFolderCommand(config, basePath);
        packageConfigCommand.execute();
        return basePath;
    }

    private void installFilterEngine(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command filterEngineConfigCommand = new InstallFilterEngineCommand(config.getFilterEngineConfig(), basePath);
        filterEngineConfigCommand.execute();
    }

    private void installCoreEngine(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command coreEngineConfigCommand = new InstallCoreEngineCommand(config.getCoreEngineConfig(), basePath);
        coreEngineConfigCommand.execute();
    }

    private void installModules(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        for (ModuleConfig moduleConfig: config.getModulesConfig()) {
            Command moduleConfigCommand = new InstallModuleCommand(moduleConfig, basePath);
            moduleConfigCommand.execute();
        }

    }
}
