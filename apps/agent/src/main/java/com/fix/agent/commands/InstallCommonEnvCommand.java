package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.PackageConfig;

import java.io.IOException;

public class InstallCommonEnvCommand extends Command {

    private PackageConfig config;

    public InstallCommonEnvCommand(PackageConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {
        Integer result = 0;

        if (this.config.getCommonEnvConfig().getEnable()){
            result = CommonTasks.wgetFile(this.config.getCommonEnvConfig().getFileUrl(), this.basePath);
        }

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallCommonEnvCommand.class.getName(),result);
        }
    }

}
