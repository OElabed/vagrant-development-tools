package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.commands.common.PackageConstant;
import com.wizard.domain.ModuleConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.FileUtils;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class InstallModuleCommand extends Command<ModuleConfig> {

    public InstallModuleCommand(ModuleConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {

        String tailFolderPath = FileUtils.getModuleTailFolderPath(this.basePath,PackageConstant.TAIL_FOLDER_NAME, this.config.getName());

        Integer result = CommonTasks.unzipPackage(this.config.getPackageUrl(), this.basePath);
        //create ./tail/moduleName folder
        result += CommonTasks.createFolder(tailFolderPath);
        //create ./tail/moduleName/.tmp folder
        result += CommonTasks.createFolder(tailFolderPath + File.separator + PackageConstant.TEMPORARY_FOLDER_NAME);
        if (result != 0) {
            throw new CommandEndedAbnormallyException(InstallModuleCommand.class.getName(), result);
        }
    }


}
