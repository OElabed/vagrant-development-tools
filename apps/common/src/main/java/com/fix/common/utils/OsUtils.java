package com.fix.common.utils;

import com.fix.common.domain.configs.Os;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by OELABED on 12/01/2018.
 */
public class OsUtils {

    private static final String WINDOWS_OS = "windows";
    private static final String LINUX_OS = "linux";
    private static final String AIX_OS = "aix";
    private static final String SOLARIS_OS = "solaris";
    private static final String MAC_OS = "mac";
    private static final String HPUX = "hp-ux";

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

        if (isHpux()) {
            return HPUX;
        }

        throw new RuntimeException();
    }

    public static Os getOsFromName(String name) {
        switch(StringUtils.lowerCase(name)) {
            case WINDOWS_OS:
                return Os.WINDOWS;
            case LINUX_OS:
                return Os.LINUX;
            case AIX_OS:
                return Os.AIX;
            case SOLARIS_OS:
                return Os.SOLARIS;
            default:
                return Os.LINUX;
        }
    }

    public static String getOsName(Os os){
        switch (os){
            case WINDOWS:
                return WINDOWS_OS;
            case LINUX:
                return LINUX_OS;
            case SOLARIS:
                return SOLARIS_OS;
            case AIX:
                return AIX_OS;
            case HPUX:
                return HPUX;
            default:
                return LINUX_OS;
        }
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

    private static boolean isHpux() {
        return (OS.indexOf("hp-ux") >= 0);
    }
}
