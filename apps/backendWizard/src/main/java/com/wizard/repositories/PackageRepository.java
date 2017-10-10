package com.wizard.repositories;

import com.wizard.commands.CommonTasks;
import com.wizard.domain.FileConfig;
import com.wizard.utils.ConfigFileParserUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;

/**
 * Created by OELABED on 10/10/2017.
 */
@Repository
public class PackageRepository {

    @Value("${workspace.path}")
    private String workspacePath;

    public FileConfig findByFolderId(String folderId) {
        FileConfig fileConfig = null;
        try {
            if (CommonTasks.checkFileExistIntoFolder(workspacePath, folderId)) {
                String fileConfigContent = CommonTasks.readFileIntoFolder(workspacePath + File.separator + folderId);
                fileConfig = ConfigFileParserUtil.parseFileConfigFromContentString(fileConfigContent);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return fileConfig;
    }

}
