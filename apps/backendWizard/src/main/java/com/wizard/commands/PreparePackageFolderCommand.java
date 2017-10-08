package com.wizard.commands;

import com.wizard.domain.FileConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import com.wizard.utils.ConfigFileParserUtil;
import com.wizard.utils.FileUtils;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import groovy.lang.Script;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class PreparePackageFolderCommand extends Command<FileConfig> {

    private static final String SCRIPT_FOLDER_CREATE_PATH = "scripts/CreateFolder.groovy";
    private static final String SCRIPT_FILE_CREATE_PATH = "scripts/CreateFile.groovy";

    private static final String FILE_CONFIG_NAME = "settings.yml";

    public PreparePackageFolderCommand(FileConfig config, String basePath) {
        super(config, basePath);
    }

    @Override
    public void execute() throws IOException, CommandEndedAbnormallyException {
        Integer result = createPackageFolder();
        result += addFileConfigToPackage();

        if (result != 0) {
            throw new CommandEndedAbnormallyException(PreparePackageFolderCommand.class.getName(), result);
        }
    }


    private Integer createPackageFolder() throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("folderName", this.basePath);
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_FOLDER_CREATE_PATH));

        Script script = shell.parse(file);
        return  (Integer) script.run();

    }

    private Integer addFileConfigToPackage() throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("path", this.basePath + File.separator);
        sharedData.setProperty("fileName", FILE_CONFIG_NAME);
        sharedData.setProperty("content", ConfigFileParserUtil.serializeFileConfigToYamlFile(this.config));
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_FILE_CREATE_PATH));

        Script script = shell.parse(file);
        return (Integer) script.run();

    }
}
