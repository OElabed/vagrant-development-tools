package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.ModuleConfig;

import java.io.IOException;

/**
 * Created by OELABED on 11/10/2017.
 */
public class StopModuleCommand extends Command {

    private ModuleConfig config;

    public StopModuleCommand(ModuleConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {

        StringBuilder stopScriptFileBuilder = new StringBuilder();

        String stopScriptFile = stopScriptFileBuilder
                .append("Stop_")
                .append(this.config.getType())
                .toString();

        Integer result = CommonTasks.stopShellScript(this.basePath, this.config.getName(), stopScriptFile, PackageConstant.TAIL_FOLDER_NAME);
        result += CommonTasks.deleteFile(FileUtils.getTailFilePath(this.basePath, PackageConstant.TAIL_FOLDER_NAME, this.config.getName()), stopScriptFile + ".pid");

        if (result != 0) {
            throw new CommandEndedAbnormallyException(StopModuleCommand.class.getName(), result);
        }
    }
}
