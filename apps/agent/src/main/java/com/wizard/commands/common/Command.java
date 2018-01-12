package com.wizard.commands.common;

import com.wizard.domain.Config;
import com.wizard.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public abstract class Command<T extends Config> {

    protected T config;

    protected String basePath;

    public abstract void execute() throws IOException, CommandEndedAbnormallyException;

    public Command(T config, String basePath) {
        this.config = config;
        this.basePath = basePath;
    }
}
