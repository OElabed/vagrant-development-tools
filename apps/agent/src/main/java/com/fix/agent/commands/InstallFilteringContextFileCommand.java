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
    public void execute() throws IOException, CommandEndedAbnormallyException {

        Integer result = CommonTasks.installArchive(fileUrl, this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallCoreEngineCommand.class.getName(),result);
        }
    }
}
