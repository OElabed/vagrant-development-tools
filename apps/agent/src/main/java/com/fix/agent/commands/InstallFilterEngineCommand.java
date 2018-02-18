package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.FilterEngineConfig;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallFilterEngineCommand extends Command {

    private FilterEngineConfig config;

    public InstallFilterEngineCommand(FilterEngineConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {
        Integer result = CommonTasks.unzipPackage(this.config.getArchiveUrl(), this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallFilterEngineCommand.class.getName(),result);
        }
    }

}