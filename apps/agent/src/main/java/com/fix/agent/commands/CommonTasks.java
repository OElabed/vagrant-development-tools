package com.fix.agent.commands;

import com.fix.agent.utils.ArchiveUtils;
import com.fix.agent.utils.FilePathUtils;
import com.fix.agent.utils.HttpDownloadUtility;
import com.fix.agent.utils.UnzipUtility;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommonTasks {

//    private static final String SCRIPT_LAUNCH_SHELL_SCRIPT_PATH = "scripts/LaunchShellScript.groovy";
//    private static final String SCRIPT_KILL_SHELL_SCRIPT_PATH = "scripts/KillShellScript.groovy";

    public static void installArchive(String source, String target) throws IOException {

        String filePath = source;

        if (ArchiveUtils.isUrl(source)) {
            // create temporary folder that contain downloaded file
            String tempPath = ArchiveUtils.getTemporaryFolder();

            CommonTasks.wgetFile(source, tempPath);

            filePath = FilePathUtils.concatenatePath(tempPath, FilenameUtils.getName(source));
        } else {
            // TODO source is file path example '/home/test/file.txt'
        }

        if (ArchiveUtils.isArchive(filePath)) {
            CommonTasks.unzipPackage(filePath, target);
        } else {
            CommonTasks.copyFile(filePath, target);
        }
    }

    public static void unzipPackage(String source, String target) throws IOException {

        String temporaryFolder = FilenameUtils.getFullPathNoEndSeparator(source);

        CommonTasks.unzipArchive(source, temporaryFolder);

        CommonTasks.deleteFile(temporaryFolder, FilenameUtils.getName(source));

        CommonTasks.copyDirectory(temporaryFolder, target);
    }

    public static void unzipArchive(String source, String target) throws IOException {
        UnzipUtility.unzip(source, target);
    }

    public static void copyFile(String source, String target) throws IOException {
        FileUtils.copyFile(new File(source), new File(FilePathUtils.concatenatePath(target, FilenameUtils.getName(source))));
    }

    public static void copyDirectory(String source, String target) throws IOException {
        FileUtils.copyDirectory(new File(source), new File(target));
    }

    public static void wgetFile(String source, String target) throws IOException {

        HttpDownloadUtility.downloadFile(source, target);

    }

    public static List<String> listFolder(String folderName) throws IOException {
        return Files.list(Paths.get(folderName)).map(path -> path.toString()).collect(Collectors.toList());
    }

    public static boolean checkFileExistIntoFolder( String folderName, String fileName) throws IOException {

        List<String> listNameMatched = CommonTasks.listFolder(folderName).stream()
                .filter(file -> FilenameUtils.getName(file).equalsIgnoreCase(fileName.toLowerCase()))
                .collect(Collectors.toList());

        if (listNameMatched.isEmpty()) {
            return false;
        }

        return true;
    }

    public static String readFile(String filePath) throws IOException {
        StringBuilder contentBuilder = new StringBuilder();

        Files.lines( Paths.get(filePath), StandardCharsets.UTF_8)
                .forEach(s -> contentBuilder.append(s).append("\n"));


        return contentBuilder.toString();
    }

    public static void createFolder(String folderPath)  {
        new File(folderPath).mkdirs();
    }

    public static void createFile(String folderPath, String fileName, String fileContent) throws IOException {
        Files.write(Paths.get(folderPath,fileName), fileContent.getBytes());
    }

    public static void deleteFile(String folderPath, String fileName) throws IOException {
        Files.deleteIfExists(Paths.get(folderPath, fileName));
    }

    public static void deleteFolder(String folderPath) throws IOException {
        FileUtils.deleteDirectory(new File(Paths.get(folderPath).toString()));
    }

}
