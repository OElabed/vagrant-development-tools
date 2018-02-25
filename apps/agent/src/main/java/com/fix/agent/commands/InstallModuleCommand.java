package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.ModuleConfig;

import java.io.IOException;
import java.nio.file.Paths;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallModuleCommand extends Command {

    private ModuleConfig config;

    public InstallModuleCommand(ModuleConfig config, String basePath) {
        super(basePath);
        this.config=config;
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {

        String tailFolderPath = FileUtils.getTailFilePath(this.basePath, PackageConstant.TAIL_FOLDER_NAME, this.config.getName());

        Integer result = CommonTasks.installArchive(this.config.getArchiveUrl(), this.basePath);

        //create ./tail/moduleName folder
        result += CommonTasks.createFolder(tailFolderPath);

        //create ./tail/moduleName/.tmp folder
        result += CommonTasks.createFolder(Paths.get(tailFolderPath, PackageConstant.TEMPORARY_FOLDER_NAME).toString());

        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallModuleCommand.class.getName(), result);
        }
    }


}
