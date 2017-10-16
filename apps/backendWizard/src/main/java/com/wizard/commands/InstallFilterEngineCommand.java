package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.domain.FilterEngineConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallFilterEngineCommand extends Command<FilterEngineConfig> {

    public InstallFilterEngineCommand(FilterEngineConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {
        Integer result = CommonTasks.unzipPackage(this.config.getPackageUrl(), this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallFilterEngineCommand.class.getName(),result);
        }
    }

}