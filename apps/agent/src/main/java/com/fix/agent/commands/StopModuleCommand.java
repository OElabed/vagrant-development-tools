package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.common.domain.configs.ModuleConfig;

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
    public void execute()  {

//        StringBuilder stopScriptFileBuilder = new StringBuilder();
//
//        String stopScriptFile = stopScriptFileBuilder
//                .append("Stop_")
//                .append(this.config.getType())
//                .toString();
//
//        Integer result = CommonTasks.stopShellScript(this.basePath, this.config.getName(), stopScriptFile, PackageConstant.TAIL_FOLDER_NAME);
//        result += CommonTasks.deleteFile(FilePathUtils.getTailFilePath(this.basePath, PackageConstant.TAIL_FOLDER_NAME, this.config.getName()), stopScriptFile + ".pid");
//
//        if (result != 0) {
//            throw new CommandEndedAbnormallyException(StopModuleCommand.class.getName(), result);
//        }
    }
}
