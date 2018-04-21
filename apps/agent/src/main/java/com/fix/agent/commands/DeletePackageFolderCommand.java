package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;

public class DeletePackageFolderCommand extends Command {


    public DeletePackageFolderCommand(String basePath) {
        super(basePath);
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {

        try {
            CommonTasks.deleteFolder(this.basePath);
        } catch (Exception exception) {
            throw new CommandEndedAbnormallyException(DeletePackageFolderCommand.class.getName(),"", exception);
        }
    }
}
