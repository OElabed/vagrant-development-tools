package com.fix.agent.commands;

import com.fix.agent.utils.FileUtils;
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
    private static final String SCRIPT_FOLDER_CREATE_PATH = "scripts/CreateFolder.groovy";
    private static final String SCRIPT_FILE_CREATE_PATH = "scripts/CreateFile.groovy";
    private static final String SCRIPT_FILE_REMOVE_PATH = "scripts/RemoveFile.groovy";
    private static final String SCRIPT_LAUNCH_SHELL_SCRIPT_PATH = "scripts/LaunchShellScript.groovy";
    private static final String SCRIPT_KILL_SHELL_SCRIPT_PATH = "scripts/KillShellScript.groovy";

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

    public static boolean checkFileExistIntoFolder( String folderName, String fileName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("fileName", fileName);
        sharedData.setProperty("folderName", folderName);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_CHECK_FILE_INTO_FOLDER_PATH));

        Script script = shell.parse(file);
        return (boolean) script.run();
    }

    public static String readFileIntoFolder(String filePath) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("filePath", filePath);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_READ_FILE_CONTENT_PATH));

        Script script = shell.parse(file);
        return (String) script.run();
    }

    public static Integer createFolder(String folderPath) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("folderName", folderPath);
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_FOLDER_CREATE_PATH));

        Script script = shell.parse(file);
        return (Integer) script.run();

    }

    public static Integer createFile(String folderPath, String fileName, String fileContent) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("path", folderPath + File.separator);
        sharedData.setProperty("fileName", fileName);
        sharedData.setProperty("content", fileContent);
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_FILE_CREATE_PATH));
        Script script = shell.parse(file);
        return (Integer) script.run();

    }

    public static Integer deleteFile(String folderPath, String fileName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("path", folderPath + File.separator);
        sharedData.setProperty("fileName", fileName);
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_FILE_REMOVE_PATH));
        Script script = shell.parse(file);
        return (Integer) script.run();

    }

    public static Integer launchShellScript(String folderPath, String subFolderName, String scriptFile, String tailFolderName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("command", FileUtils.getFolderPath(folderPath,subFolderName) + File.separator + scriptFile );
        sharedData.setProperty("scriptFile", scriptFile);
        sharedData.setProperty("tailFolder", FileUtils.getTailFilePath(folderPath, tailFolderName, subFolderName));
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_LAUNCH_SHELL_SCRIPT_PATH));
        Script script = shell.parse(file);
        return (Integer) script.run();

    }

    public static Integer stopShellScript(String folderPath, String subFolderName, String scriptFile, String tailFolderName) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("scriptFile", scriptFile);
        sharedData.setProperty("tailFolder", FileUtils.getTailFilePath(folderPath, tailFolderName, subFolderName));
        GroovyShell shell = new GroovyShell(sharedData);
        final File file = new File(FileUtils.getPathFromResource(SCRIPT_KILL_SHELL_SCRIPT_PATH));
        Script script = shell.parse(file);
        return (Integer) script.run();

    }
}
