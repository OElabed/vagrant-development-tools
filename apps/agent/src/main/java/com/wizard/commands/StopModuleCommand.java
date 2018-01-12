package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.commands.common.PackageConstant;
import com.wizard.domain.ModuleConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.FileUtils;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 11/10/2017.
 */
public class StopModuleCommand extends Command<ModuleConfig> {

    public StopModuleCommand(ModuleConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {

        String startScriptFile = this.config.getScripts().get("start");

        if (startScriptFile.isEmpty()) {
            throw new CommandEndedAbnormallyException(StopModuleCommand.class.getName(), "start file not found");
        }

        Integer result = CommonTasks.stopShellScript(this.basePath, this.config.getName(), startScriptFile, PackageConstant.TAIL_FOLDER_NAME);
        result += CommonTasks.deleteFile(FileUtils.getModuleTailFolderPath(this.basePath, PackageConstant.TAIL_FOLDER_NAME, this.config.getName()), startScriptFile + ".pid");

        if (result != 0) {
            throw new CommandEndedAbnormallyException(StopModuleCommand.class.getName(), result);
        }
    }
}
