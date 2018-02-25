package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallFilterEngineBinaryCommand extends Command {

    private String archiveUrl;

    public InstallFilterEngineBinaryCommand(String archiveUrl, String basePath) {
        super(basePath);
        this.archiveUrl = archiveUrl;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException, IOException {

        Integer result = -1;

        // Install Filter Engine
        if (StringUtils.isNoneEmpty(this.archiveUrl)) {
            result = CommonTasks.installArchive(this.archiveUrl, this.basePath);
        }

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallCoreEngineCommand.class.getName(),result);
        }
    }

}