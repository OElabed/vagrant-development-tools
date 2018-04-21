package com.fix.agent.installers;

import com.fix.agent.commands.InstallCommonEnvCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FilePathUtils;
import com.fix.common.domain.configs.CommonEnvConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CommonEnvInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    public void installCommonEnv(CommonEnvConfig config, String packageId) throws CommandEndedAbnormallyException {
        if (config.getEnable()) {
            String basePath = FilePathUtils.getFolderPath(this.workspacePath, packageId);
            Command commonEnvCommand = new InstallCommonEnvCommand(config, basePath);
            commonEnvCommand.execute();
        }
    }
}
