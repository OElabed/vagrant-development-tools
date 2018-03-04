package com.fix.agent.repositories;

import com.fix.agent.commands.CommonTasks;
import com.fix.agent.commands.common.PackageConstant;
import com.fix.common.domain.files.FileNode;
import com.fix.agent.utils.FileTreeUtil;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.utils.PackageConfigParserUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<PackageConfig> findAllPackages() {
        List<PackageConfig> packageConfigList = new ArrayList<PackageConfig>();
        try {
            List<String> folders = CommonTasks.listFolder(workspacePath);

            packageConfigList = folders.stream()
                    .map(folder -> {
                        String fileConfigContent = null;
                        try {
                            fileConfigContent = CommonTasks.readFileIntoFolder(workspacePath + File.separator + folder + File.separator + PackageConstant.FILE_CONFIG_NAME);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                        return PackageConfigParserUtil.parsePackageConfigFromContentString(fileConfigContent);
                    })
                    .collect(Collectors.toList());


        } catch (IOException e) {
            e.printStackTrace();
        }

        return packageConfigList;
    }

    public FileNode findPackageContentByPackageId (String folderId) {
       return FileTreeUtil.collectContent(FileUtils.getFolderPath(workspacePath, folderId));
    }

}
