package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.PackageConfig;

import java.io.IOException;

public class InstallPackageLicenceCommand extends Command {

    private PackageConfig config;

    public InstallPackageLicenceCommand(PackageConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {

        Integer result = CommonTasks.wgetFile(this.config.getLicenceUrl(), this.basePath);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallPackageLicenceCommand.class.getName(),result);
        }
    }
}
