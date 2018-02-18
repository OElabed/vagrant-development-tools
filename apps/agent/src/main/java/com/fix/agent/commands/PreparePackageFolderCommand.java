package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.utils.PackageConfigParserUtil;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PreparePackageFolderCommand extends Command {

    private PackageConfig config;

    public PreparePackageFolderCommand(PackageConfig config, String basePath) {
        super(basePath);
        this.config = config;
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
