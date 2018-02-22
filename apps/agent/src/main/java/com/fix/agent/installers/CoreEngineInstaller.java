package com.fix.agent.installers;

import com.fix.agent.commands.InstallCoreEngineCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.CoreEngineConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CoreEngineInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    public void installCoreEngine(CoreEngineConfig config, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.getFolderPath(this.workspacePath, packageId);
        Command coreEngineConfigCommand = new InstallCoreEngineCommand(config, basePath);
        coreEngineConfigCommand.execute();
    }
}
