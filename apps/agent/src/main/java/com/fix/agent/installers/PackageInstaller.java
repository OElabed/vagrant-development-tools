package com.fix.agent.installers;

import com.fix.agent.commands.*;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.exceptions.PackageInstallerException;
import com.fix.agent.utils.IdentifierGeneratorUtils;
import com.fix.common.domain.configs.ModuleConfig;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
@Component
public class PackageInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    @Autowired
    private CoreEngineInstaller coreEngineInstaller;

    @Autowired
    private FilterEngineInstaller filterEngineInstaller;

    @Autowired
    private ModuleInstaller moduleInstaller;


    public String installPackage(PackageConfig configFile){
        try {
            // prepare
            String packageId = preparePackageFolder(configFile);

            installPackageStructure(configFile, packageId);
            // install FilterEngine
            this.filterEngineInstaller.installFilterEngine(configFile.getFilterEngineConfig(), packageId);
            // install CE
            this.coreEngineInstaller.installCoreEngine(configFile.getCoreEngineConfig(), packageId);
            // install Modules
            this.installModules(configFile.getModulesConfig(), packageId);

            return packageId;

        } catch (CommandEndedAbnormallyException | IOException exp) {
            // TODO Delete package if exist (clean)
            throw new PackageInstallerException("error on package creation");
        }
    }

    private String preparePackageFolder(PackageConfig config) throws IOException, CommandEndedAbnormallyException {
        String folderId = IdentifierGeneratorUtils.generateUUID();
        String basePath = workspacePath + File.separator + folderId;
        config.setBasePath(basePath);
        Command packageConfigCommand = new PreparePackageFolderCommand(config, basePath);
        packageConfigCommand.execute();
        return folderId;
    }

    private void installPackageStructure(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command licenceCommand = new InstallPackageLicenceCommand(config, basePath);
        licenceCommand.execute();

        Command commonEnvCommand = new InstallCommonEnvCommand(config, basePath);
        commonEnvCommand.execute();
    }

    private void installModules(ModuleConfig[] moduleConfigs, String packageId) throws IOException, CommandEndedAbnormallyException {
        for (ModuleConfig moduleConfig: moduleConfigs) {
            this.moduleInstaller.installModule(moduleConfig, packageId);
        }

    }
}
