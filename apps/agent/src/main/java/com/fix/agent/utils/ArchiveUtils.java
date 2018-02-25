package com.fix.agent.utils;


import com.google.common.io.Files;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.validator.routines.UrlValidator;

import java.io.File;


public class ArchiveUtils {

    public static String getTemporaryFolder() {
        File directory = Files.createTempDir();
        return directory.getAbsolutePath();
    }

    public static boolean isUrl(String path) {
        String[] schemes = {"http","https"};
        UrlValidator urlValidator= new UrlValidator(schemes);
        if (urlValidator.isValid(path)) {
            return true;
        } else {
            return false;
        }
    }

    public static boolean isArchive(String path) {
        String[] extensions = {"zip", "tar.gz"};
        String fileName = FilenameUtils.getName(path);
        return FilenameUtils.isExtension(fileName, extensions);
    }

}
