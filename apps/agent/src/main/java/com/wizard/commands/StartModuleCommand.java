package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.commands.common.PackageConstant;
import com.wizard.domain.ModuleConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;

import java.io.IOException;

/**
 * Created by OELABED on 11/10/2017.
 */
public class StartModuleCommand extends Command<ModuleConfig> {

    public StartModuleCommand(ModuleConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {

        String startScriptFile = this.config.getScripts().get("start");

        if(startScriptFile.isEmpty()){
            throw new CommandEndedAbnormallyException(StartModuleCommand.class.getName(), "start file not found");
        }

        Integer result = CommonTasks.launchShellScript(this.basePath, this.config.getName(), startScriptFile, PackageConstant.TAIL_FOLDER_NAME);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(StartModuleCommand.class.getName(), result);
        }
    }
}
