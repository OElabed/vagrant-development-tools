package com.wizard.utils;

/**
 * Created by OELABED on 12/01/2018.
 */
public class OsUtils {

    private static final String WINDOWS_OS = "windows";
    private static final String LINUX_OS = "linux";
    private static final String AIX_OS = "aix";
    private static final String SOLARIS_OS = "solaris";
    private static final String MAC_OS = "mac";

    private static String OS = System.getProperty("os.name").toLowerCase();

    public static String getOsName() {

        if (isWindows()) {
            return WINDOWS_OS;
        }
        if (isMac()) {
            return MAC_OS;
        }

        if (isLunix()) {
            return LINUX_OS;
        }

        if (isSolaris()) {
            return SOLARIS_OS;
        }

        if (isAix()) {
            return AIX_OS;
        }

        throw new RuntimeException();
    }

    private static boolean isWindows() {
        return (OS.indexOf("win") >= 0);
    }

    private static boolean isMac() {
        return (OS.indexOf("mac") >= 0);
    }

    private static boolean isLunix() {
        return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 );
    }

    private static boolean isAix() {
        return (OS.indexOf("aix") > 0 );
    }

    private static boolean isSolaris() {
        return (OS.indexOf("sunos") >= 0);
    }
}
