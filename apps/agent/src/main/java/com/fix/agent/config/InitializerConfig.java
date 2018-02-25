package com.fix.agent.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.attribute.PosixFilePermission;
import java.util.HashSet;
import java.util.Set;

@Configuration
public class InitializerConfig {

    @Value("${workspace.path}")
    private String workspacePath;

    @Autowired
    public void initializeWorkspace() throws IOException {

        File workspaceFolder = new File(this.workspacePath);
        // check if workspace exist

        if (workspaceFolder.exists() == false || workspaceFolder.isDirectory() == false) {
            // create directory
            workspaceFolder.mkdir();
        }

        if (workspaceFolder.canWrite() == false || workspaceFolder.canRead() == false) {
            Set<PosixFilePermission> perms = new HashSet<>();
            perms.add(PosixFilePermission.OWNER_READ);
            perms.add(PosixFilePermission.OWNER_WRITE);
            Files.setPosixFilePermissions(workspaceFolder.toPath(), perms);
        }
    }
}
