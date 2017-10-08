package com.wizard.commands;

import com.wizard.domain.CoreEngineConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.FileUtils;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import groovy.lang.Script;

import java.io.File;
import java.io.IOException;
import java.net.URL;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallCoreEngineCommand extends Command<CoreEngineConfig> {

    public InstallCoreEngineCommand(CoreEngineConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {

        Integer result= CommonTasks.unzipPackage(this.config.getPackageUrl(), this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallCoreEngineCommand.class.getName(),result);
        }

    }
}
