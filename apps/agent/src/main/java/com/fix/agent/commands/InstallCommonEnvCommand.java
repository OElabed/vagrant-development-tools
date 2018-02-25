package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.CommonEnvConfig;

import java.io.IOException;

public class InstallCommonEnvCommand extends Command {

    private CommonEnvConfig config;

    public InstallCommonEnvCommand(CommonEnvConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {

        Integer result = CommonTasks.wgetFile(this.config.getFileUrl(), this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallCommonEnvCommand.class.getName(),result);
        }
    }

}
