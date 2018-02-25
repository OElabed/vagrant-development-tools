package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

public class DeletePackageFolderCommand extends Command {


    public DeletePackageFolderCommand(String basePath) {
        super(basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {
        Integer result= CommonTasks.deleteFolder(this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(DeletePackageFolderCommand.class.getName(),result);
        }
    }
}
