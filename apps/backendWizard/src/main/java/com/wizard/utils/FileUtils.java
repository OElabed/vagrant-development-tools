package com.wizard.utils;

import com.wizard.commands.common.PackageConstant;

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

    public static String getModuleTailFolderPath(String basePath, String tailFolderName, String moduleName) {
        return basePath + File.separator + tailFolderName + File.separator + moduleName;
    }

    public static String getModuleFolderPath(String basePath, String moduleName) {
        return basePath + File.separator + moduleName;
    }
}
