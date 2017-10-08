package com.wizard.utils;

import java.net.URL;

/**
 * Created by OELABED on 08/10/2017.
 */
public class FileUtils {

    public static String getPathFromResource(String relativePath) {
        URL urlFile = Thread.currentThread().getContextClassLoader().getResource(relativePath);
        return urlFile.getPath();
    }
}
