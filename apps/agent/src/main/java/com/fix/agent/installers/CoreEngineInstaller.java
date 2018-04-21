package com.fix.agent.installers;

import com.fix.agent.commands.InstallCoreEngineCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FilePathUtils;
import com.fix.common.domain.configs.CoreEngineConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CoreEngineInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    public void installCoreEngine(CoreEngineConfig config, String packageId) throws CommandEndedAbnormallyException {
        String basePath = FilePathUtils.getFolderPath(this.workspacePath, packageId);
        Command coreEngineConfigCommand = new InstallCoreEngineCommand(config, basePath);
        coreEngineConfigCommand.execute();
    }
}
