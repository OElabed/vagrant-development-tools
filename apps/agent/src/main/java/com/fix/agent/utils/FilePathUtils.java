package com.fix.agent.utils;

import java.net.URL;
import java.nio.file.Paths;

/**
 * Created by OELABED on 08/10/2017.
 */
public class FilePathUtils {

    public static String getPathFromResource(String relativePath) {
        URL urlFile = Thread.currentThread().getContextClassLoader().getResource(relativePath);
        return urlFile.getPath();
    }

    public static String getTailFilePath(String basePath, String tailFolderName, String tailName) {
        return Paths.get(basePath, tailFolderName, tailName).toString();
    }

    public static String getFolderPath(String basePath, String moduleName) {
        return Paths.get(basePath, moduleName).toString();
    }

    public static String concatenatePath(String directory , String filename) {
        return  Paths.get(directory, filename).toString();
    }
}
