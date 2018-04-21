package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.utils.PackageConfigParserUtil;

import java.nio.file.Paths;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PreparePackageFolderCommand extends Command {

    private PackageConfig config;

    private String configFolderName;

    public PreparePackageFolderCommand(PackageConfig config, String configFolderName, String basePath) {
        super(basePath);
        this.config = config;
        this.configFolderName = configFolderName;

    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {

        try {

            CommonTasks.createFolder(this.basePath);
            // create Settings.yml file
            CommonTasks.createFile(this.basePath, PackageConstant.FILE_CONFIG_NAME, PackageConfigParserUtil.serializePackageConfigToYamlFile(this.config));

            // create .tail folder
            CommonTasks.createFolder(Paths.get(this.basePath, PackageConstant.TAIL_FOLDER_NAME).toString());

            // create .tail folder
            CommonTasks.createFolder(Paths.get(this.basePath, this.configFolderName).toString());

        } catch (Exception exception) {
            throw new CommandEndedAbnormallyException(PreparePackageFolderCommand.class.getName(), "failed to create and prepare package folder", exception);
        }

    }
}
