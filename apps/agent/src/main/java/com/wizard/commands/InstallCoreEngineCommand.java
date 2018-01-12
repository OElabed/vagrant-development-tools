package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.domain.CoreEngineConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

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
