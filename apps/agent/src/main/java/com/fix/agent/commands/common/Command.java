package com.fix.agent.commands.common;

import com.fix.agent.exceptions.CommandEndedAbnormallyException;

/**
 * Created by OELABED on 08/10/2017.
 */
public abstract class Command {

    protected static final String ERROR_COMMAND = "";

    protected String basePath;

    public abstract void execute() throws CommandEndedAbnormallyException;

    public Command( String basePath) {
        this.basePath = basePath;
    }
}
