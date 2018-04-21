package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.common.domain.configs.ModuleConfig;

/**
 * Created by OELABED on 11/10/2017.
 */
public class StartModuleCommand extends Command {

    private ModuleConfig config;

    public StartModuleCommand(ModuleConfig config, String basePath) {
        super(basePath);
        this.config = config;
    }

    @Override
    public void execute()  {
//
//        StringBuilder startScriptFileBuilder = new StringBuilder();
//
//        String startScriptFile = startScriptFileBuilder
//                .append("Start_")
//                .append(this.config.getType())
//                .toString();
//
//        Integer result = CommonTasks.launchShellScript(this.basePath, this.config.getName(), startScriptFile, PackageConstant.TAIL_FOLDER_NAME);
//
//        if (result != 0) {
//            throw new CommandEndedAbnormallyException(StartModuleCommand.class.getName(), result);
//        }
    }
}
