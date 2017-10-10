package com.wizard.commands;

import com.wizard.utils.FileUtils;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import groovy.lang.Script;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommonTasks {

    private static final String SCRIPT_UNZIP_ARCHIVE_PATH = "scripts/UnzipArchive.groovy";
    private static final String SCRIPT_LIST_FOLDER_PATH = "scripts/ListFolderFiles.groovy";
    private static final String SCRIPT_CHECK_FILE_INTO_FOLDER_PATH = "scripts/CheckFileIntoFolder.groovy";
    private static final String SCRIPT_READ_FILE_CONTENT_PATH = "scripts/ReadFileContent.groovy";

    public static Integer unzipPackage(String source, String target) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("source", source);
        sharedData.setProperty("target", target);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_UNZIP_ARCHIVE_PATH));

        Script script = shell.parse(file);
        return (Integer) script.run();
    }

    public static List<String> listFolder(String folderName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("folderName", folderName);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_LIST_FOLDER_PATH));

        Script script = shell.parse(file);
        return (List<String>) script.run();
    }

    public static  boolean checkFileExistIntoFolder(String fileName, String folderName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("fileName", fileName);
        sharedData.setProperty("folderName", folderName);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_CHECK_FILE_INTO_FOLDER_PATH));

        Script script = shell.parse(file);
        return (boolean) script.run();
    }

    public static  String readFileIntoFolder(String filePath) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("filePath", filePath);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_READ_FILE_CONTENT_PATH));

        Script script = shell.parse(file);
        return (String) script.run();
    }
}
