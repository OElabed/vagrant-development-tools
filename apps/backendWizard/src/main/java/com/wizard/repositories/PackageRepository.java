package com.wizard.repositories;

import com.wizard.commands.CommonTasks;
import com.wizard.commands.common.PackageConstant;
import com.wizard.domain.PackageConfig;
import com.wizard.utils.PackageConfigParserUtil;
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

    public PackageConfig findByPackageId(String folderId) {
        PackageConfig packageConfig = null;
        try {
            if (CommonTasks.checkFileExistIntoFolder(workspacePath, folderId)) {
                String fileConfigContent = CommonTasks.readFileIntoFolder(workspacePath + File.separator + folderId + File.separator + PackageConstant.FILE_CONFIG_NAME);
                packageConfig = PackageConfigParserUtil.parsePackageConfigFromContentString(fileConfigContent);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return packageConfig;
    }

}
