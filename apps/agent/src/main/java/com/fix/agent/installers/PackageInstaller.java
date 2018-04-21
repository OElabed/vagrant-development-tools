package com.fix.agent.installers;

import com.fix.agent.commands.DeletePackageFolderCommand;
import com.fix.agent.commands.PreparePackageFolderCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.exceptions.PackageInstallerException;
import com.fix.agent.utils.FilePathUtils;
import com.fix.agent.utils.IdentifierGeneratorUtils;
import com.fix.common.domain.configs.ModuleConfig;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.file.Paths;

/**
 * Created by OELABED on 08/10/2017.
 */
@Component
public class PackageInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    @Value("${package-metadata.config.folder}")
    private String configFolder;

    @Autowired
    private LicenceInstaller licenceInstaller;

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
            packageId = this.preparePackageFolder(configFile);

            // install licence package
            this.licenceInstaller.installPackageLicence(configFile, packageId);

            // install common env
            this.commonEnvInstaller.installCommonEnv(configFile.getCommonEnvConfig(), packageId);

            // install FilterEngine
            this.filterEngineInstaller.installFilterEngine(configFile.getFilterEngineConfig(), packageId);

            // install CE
            this.coreEngineInstaller.installCoreEngine(configFile.getCoreEngineConfig(), packageId);

            // install Modules
            this.installModules(configFile.getModulesConfig(), packageId);

            return packageId;

        } catch (CommandEndedAbnormallyException exception) {
            // delete package with all subdirectory
            try {
                this.deletePackage(packageId);
            } catch (CommandEndedAbnormallyException exp) {
                throw new PackageInstallerException("error on removing package", exp);
            } finally {
                throw new PackageInstallerException("error on package creation", exception);
            }
        }
    }

    private String preparePackageFolder(PackageConfig config) throws CommandEndedAbnormallyException {
        String folderId = IdentifierGeneratorUtils.generateUUID();
        String basePath = Paths.get(workspacePath,folderId).toString();
        //String basePath = workspacePath + File.separator + folderId;
        config.setBasePath(basePath);
        Command packageConfigCommand = new PreparePackageFolderCommand(config, this.configFolder, basePath);
        packageConfigCommand.execute();
        return folderId;
    }
    
    private void deletePackage(String packageId) throws CommandEndedAbnormallyException {
        String basePath = FilePathUtils.getFolderPath(this.workspacePath, packageId);
        Command deletePackageCommand = new DeletePackageFolderCommand(basePath);
        deletePackageCommand.execute();
    }

    private void installModules(ModuleConfig[] moduleConfigs, String packageId) throws CommandEndedAbnormallyException {
        for (ModuleConfig moduleConfig: moduleConfigs) {
            this.moduleInstaller.installModule(moduleConfig, packageId);
        }
    }
}
