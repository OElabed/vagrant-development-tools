package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallFilterEngineBinaryCommand extends Command {

    private String archiveUrl;

    public InstallFilterEngineBinaryCommand(String archiveUrl, String basePath) {
        super(basePath);
        this.archiveUrl = archiveUrl;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {

        try {
            CommonTasks.installArchive(this.archiveUrl, this.basePath);
        } catch (IOException exception) {
            throw new CommandEndedAbnormallyException(InstallCoreEngineCommand.class.getName(), exception.getMessage(), exception);
        }

    }

}