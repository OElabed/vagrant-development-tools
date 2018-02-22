package com.fix.agent.installers;

import com.fix.agent.commands.InstallModuleCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.ModuleConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class ModuleInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    public void installModule(ModuleConfig moduleConfig, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.getFolderPath(this.workspacePath, packageId);
        Command moduleConfigCommand = new InstallModuleCommand(moduleConfig, basePath);
        moduleConfigCommand.execute();
    }

}
