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
    public void execute() throws CommandEndedAbnormallyException {

        try {
            CommonTasks.installArchive(this.config.getLicenceUrl(), this.basePath);
        } catch (IOException exception) {
            throw new CommandEndedAbnormallyException(InstallPackageLicenceCommand.class.getName(), "failed to install package licence", exception);
        }
    }
}
