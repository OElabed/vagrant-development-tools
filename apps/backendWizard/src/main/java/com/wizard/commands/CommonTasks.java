package com.wizard.commands;

import com.wizard.utils.FileUtils;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import groovy.lang.Script;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommonTasks {

    private static final String SCRIPT_UNZIP_ARCHIVE_PATH = "scripts/UnzipArchive.groovy";

    public static Integer unzipPackage(String source, String target) throws IOException {
        Binding sharedData = new Binding();
        sharedData.setProperty("source", source);
        sharedData.setProperty("target", target);
        GroovyShell shell = new GroovyShell(sharedData);

        final File file = new File(FileUtils.getPathFromResource(SCRIPT_UNZIP_ARCHIVE_PATH));

        Script script = shell.parse(file);
        return (Integer) script.run();
    }
}
