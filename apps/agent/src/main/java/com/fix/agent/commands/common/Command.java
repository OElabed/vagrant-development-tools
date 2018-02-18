package com.fix.agent.commands.common;

import com.fix.agent.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public abstract class Command {

    protected String basePath;

    public abstract void execute() throws IOException, CommandEndedAbnormallyException;

    public Command( String basePath) {
        this.basePath = basePath;
    }
}
