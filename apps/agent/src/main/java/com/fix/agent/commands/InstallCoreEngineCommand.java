package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.CoreEngineConfig;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallCoreEngineCommand extends Command {

    private CoreEngineConfig config;

    public InstallCoreEngineCommand(CoreEngineConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {

        try {
            CommonTasks.installArchive(this.config.getArchiveUrl(), this.basePath);
        } catch (IOException exception) {
            throw new CommandEndedAbnormallyException(InstallCoreEngineCommand.class.getName(), exception.getMessage(), exception);
        }

    }
}
