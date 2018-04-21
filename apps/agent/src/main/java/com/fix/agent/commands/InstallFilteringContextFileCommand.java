package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

public class InstallFilteringContextFileCommand extends Command {

    private String fileUrl;

    public InstallFilteringContextFileCommand(String basePath, String fileUrl) {
        super(basePath);
        this.fileUrl = fileUrl;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {

        try {
            CommonTasks.installArchive(this.fileUrl, this.basePath);
        } catch (IOException exception) {
            throw new CommandEndedAbnormallyException(InstallFilteringContextFileCommand.class.getName(), exception.getMessage(), exception);
        }
    }
}
