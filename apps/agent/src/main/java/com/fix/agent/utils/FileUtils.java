package com.fix.agent.utils;

import java.io.File;
import java.net.URL;

/**
 * Created by OELABED on 08/10/2017.
 */
public class FileUtils {

    public static String getPathFromResource(String relativePath) {
        URL urlFile = Thread.currentThread().getContextClassLoader().getResource(relativePath);
        return urlFile.getPath();
    }

    public static String getTailFilePath(String basePath, String tailFolderName, String tailName) {
        return basePath + File.separator + tailFolderName + File.separator + tailName;
    }

    public static String getFolderPath(String basePath, String moduleName) {
        return basePath + File.separator + moduleName;
    }
}
