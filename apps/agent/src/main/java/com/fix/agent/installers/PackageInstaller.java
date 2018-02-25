package com.fix.agent.installers;

import com.fix.agent.commands.DeletePackageFolderCommand;
import com.fix.agent.commands.InstallPackageLicenceCommand;
import com.fix.agent.commands.PreparePackageFolderCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.exceptions.PackageInstallerException;
import com.fix.agent.utils.FileUtils;
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

    @Autowired
    private CommonEnvInstaller commonEnvInstaller;

    public String installPackage(PackageConfig configFile) {
        String packageId = null;
        
        try {
            // prepare
            packageId = preparePackageFolder(configFile);

            // install licence package
            installPackageLicence(configFile, packageId);

            // install common env
            this.commonEnvInstaller.installCommonEnv(configFile.getCommonEnvConfig(), packageId);

            // install FilterEngine
            this.filterEngineInstaller.installFilterEngine(configFile.getFilterEngineConfig(), packageId);

            // install CE
            this.coreEngineInstaller.installCoreEngine(configFile.getCoreEngineConfig(), packageId);

            // install Modules
            this.installModules(configFile.getModulesConfig(), packageId);

            return packageId;

        } catch (CommandEndedAbnormallyException | IOException exp) {
            throw new PackageInstallerException("error on package creation");
        } finally {
            try {
                // delete package with all subdirectory
                this.deletePackage(packageId);
            } catch (IOException | CommandEndedAbnormallyException exp) {
                throw new PackageInstallerException("error on package delete");
            }
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

    private void installPackageLicence(PackageConfig config, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command licenceCommand = new InstallPackageLicenceCommand(config, basePath);
        licenceCommand.execute();
    }
    
    private void deletePackage(String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.getFolderPath(this.workspacePath, packageId);
        Command deletePackageCommand = new DeletePackageFolderCommand(basePath);
        deletePackageCommand.execute();
    }

    private void installModules(ModuleConfig[] moduleConfigs, String packageId) throws IOException, CommandEndedAbnormallyException {
        for (ModuleConfig moduleConfig: moduleConfigs) {
            this.moduleInstaller.installModule(moduleConfig, packageId);
        }

    }
}
