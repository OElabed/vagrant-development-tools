package com.fix.agent.commands;

import com.fix.agent.commands.common.Command;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FilePathUtils;
import com.fix.common.domain.configs.ModuleConfig;
import lombok.extern.slf4j.Slf4j;

import java.nio.file.Paths;

/**
 * Created by OELABED on 08/10/2017.
 */
@Slf4j
public class InstallModuleCommand extends Command {

    private static final String ERROR_MESSAGE = "failed to install module";

    private ModuleConfig config;

    public InstallModuleCommand(ModuleConfig config, String basePath) {
        super(basePath);
        this.config=config;
    }

    @Override
    public void execute() throws CommandEndedAbnormallyException {


        String tailFolderPath = FilePathUtils.getTailFilePath(this.basePath, PackageConstant.TAIL_FOLDER_NAME, this.config.getName());

        try {

            CommonTasks.installArchive(this.config.getArchiveUrl(), this.basePath);

            //create ./tail/moduleName folder
            CommonTasks.createFolder(tailFolderPath);

            //create ./tail/moduleName/.tmp folder
            CommonTasks.createFolder(Paths.get(tailFolderPath, PackageConstant.TEMPORARY_FOLDER_NAME).toString());

        } catch (Exception exception) {
            log.debug(ERROR_MESSAGE, exception);
            throw new CommandEndedAbnormallyException(InstallModuleCommand.class.getName(), ERROR_MESSAGE, exception);
        }

    }


}
