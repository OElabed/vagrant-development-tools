package com.fix.agent.installers;

import com.fix.agent.commands.InstallPackageLicenceCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FilePathUtils;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class LicenceInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    @Value("${package-metadata.config.folder}")
    private String configFolder;

    public void installPackageLicence(PackageConfig config, String packageId) throws CommandEndedAbnormallyException {
        String basePath = FilePathUtils.concatenatePath(FilePathUtils.getFolderPath(this.workspacePath, packageId), this.configFolder);
        Command licenceCommand = new InstallPackageLicenceCommand(config, basePath);
        licenceCommand.execute();
    }

}
