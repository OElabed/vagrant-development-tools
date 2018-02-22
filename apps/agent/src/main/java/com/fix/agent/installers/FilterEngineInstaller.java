package com.fix.agent.installers;

import com.fix.agent.commands.InstallFilterEngineCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.FilterEngineConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class FilterEngineInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    public void installFilterEngine(FilterEngineConfig config, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.getFolderPath(this.workspacePath, packageId);
        Command filterEngineConfigCommand = new InstallFilterEngineCommand(config, basePath);
        filterEngineConfigCommand.execute();
    }
}
