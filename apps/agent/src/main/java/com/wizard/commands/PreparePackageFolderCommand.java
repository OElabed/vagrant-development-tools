package com.wizard.commands;

import com.wizard.commands.common.Command;
import com.wizard.commands.common.PackageConstant;
import com.wizard.domain.PackageConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.PackageConfigParserUtil;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PreparePackageFolderCommand extends Command<PackageConfig> {

    public PreparePackageFolderCommand(PackageConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {
        Integer result = CommonTasks.createFolder(this.basePath);
        // create Settings.yml file
        result += CommonTasks.createFile(this.basePath, PackageConstant.FILE_CONFIG_NAME, PackageConfigParserUtil.serializePackageConfigToYamlFile(this.config));
        // create .tail folder
        result += CommonTasks.createFolder(this.basePath + File.separator + PackageConstant.TAIL_FOLDER_NAME);

        if (result != 0) {
            throw new CommandEndedAbnormallyException(PreparePackageFolderCommand.class.getName(), result);
        }
    }
}
