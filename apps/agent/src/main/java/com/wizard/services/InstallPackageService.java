package com.wizard.services;

import com.wizard.commands.*;
import com.wizard.commands.common.Command;
import com.wizard.domain.CoreEngineConfig;
import com.wizard.domain.PackageConfig;
import com.wizard.domain.FilterEngineConfig;
import com.wizard.domain.ModuleConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.FileUtils;
import com.wizard.utils.IdentifierGeneratorUtils;
import com.wizard.utils.PackageConfigParserUtil;
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

    public void installAllPackage(){
        PackageConfig packageConfig = PackageConfigParserUtil
                .parsePackageConfigFromYaml(FileUtils.getPathFromResource(PACKAGE_DEFAULT_CONFIG_PATH));
        installAllPackage(packageConfig);
    }

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

        } catch (CommandEndedAbnormallyException  | IOException exp) {
            exp.printStackTrace();
        }
    }

    private String preparePackageFolder(PackageConfig config) throws IOException, CommandEndedAbnormallyException {
        String folderId = IdentifierGeneratorUtils.generateUUID();
        String basePath = workspacePath + File.separator + folderId;
        config.getPackageDefinition().setBasePath(basePath);
        Command<PackageConfig> packageConfigCommand = new PreparePackageFolderCommand(config, basePath);
        packageConfigCommand.execute();
        return basePath;
    }

    private void installFilterEngine(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command<FilterEngineConfig> filterEngineConfigCommand = new InstallFilterEngineCommand(config.getFilterEngine(), basePath);
        filterEngineConfigCommand.execute();
    }

    private void installCoreEngine(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command<CoreEngineConfig> coreEngineConfigCommand = new InstallCoreEngineCommand(config.getCoreEngine(), basePath);
        coreEngineConfigCommand.execute();
    }

    private void installModules(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        for (ModuleConfig moduleConfig: config.getModules()) {
            Command<ModuleConfig> moduleConfigCommand = new InstallModuleCommand(moduleConfig, basePath);
            moduleConfigCommand.execute();
        }

    }
}
