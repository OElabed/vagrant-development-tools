package com.fix.agent.installers;

import com.fix.agent.commands.InstallFilterEngineBinaryCommand;
import com.fix.agent.commands.InstallFilteringContextFileCommand;
import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.utils.FileUtils;
import com.fix.common.domain.configs.FilterEngineConfig;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class FilterEngineInstaller {

    @Value("${workspace.path}")
    private String workspacePath;

    @Value("${package-metadata.filter-engine.folder}")
    private String filterEngineFolder;

    public void installFilterEngine(FilterEngineConfig config, String packageId) throws IOException, CommandEndedAbnormallyException {
        // install FilterEngine Binary
        this.installFilterEngineBinary(config.getArchiveUrl(), packageId);

        // install licence
        this.installLicenceFile(config.getLicenceFileUrl(), packageId);

        // install Filtering context Files
        this.installFilteringContext(config, packageId);
    }

    public void installFilteringContext(FilterEngineConfig config, String packageId) throws IOException, CommandEndedAbnormallyException {

        if (StringUtils.isNotEmpty(config.getKzFileUrl())) {
            this.installKzFile(config.getKzFileUrl(), packageId);
        }

        if (StringUtils.isNotEmpty(config.getFmlFile1Url())) {
            this.installFmlFile1(config.getFmlFile1Url(), packageId);
        }

        if (StringUtils.isNotEmpty(config.getFmlFile2Url())) {
            this.installFmlFile2(config.getFmlFile2Url(), packageId);
        }

        if (StringUtils.isNotEmpty(config.getScoreFileUrl())) {
            this.installScoreFile(config.getScoreFileUrl(), packageId);
        }
    }

    public void installFilterEngineBinary(String archiveUrl, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.getFolderPath(this.workspacePath, packageId);
        Command filterEngineConfigCommand = new InstallFilterEngineBinaryCommand(archiveUrl, basePath);
        filterEngineConfigCommand.execute();
    }

    public void installLicenceFile(String licenceFileUrl, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.concatenatePath(FileUtils.getFolderPath(this.workspacePath, packageId), this.filterEngineFolder);
        Command filteringContextFileInstallCommand = new InstallFilteringContextFileCommand(basePath, licenceFileUrl);
        filteringContextFileInstallCommand.execute();
    }

    public void installKzFile(String kzUrl, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.concatenatePath(FileUtils.getFolderPath(this.workspacePath, packageId), this.filterEngineFolder);
        Command filteringContextFileInstallCommand = new InstallFilteringContextFileCommand(basePath, kzUrl);
        filteringContextFileInstallCommand.execute();
    }

    public void installFmlFile1(String fml1Url, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.concatenatePath(FileUtils.getFolderPath(this.workspacePath, packageId), this.filterEngineFolder);
        Command filteringContextFileInstallCommand = new InstallFilteringContextFileCommand(basePath, fml1Url);
        filteringContextFileInstallCommand.execute();
    }

    public void installFmlFile2(String fml2Url, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.concatenatePath(FileUtils.getFolderPath(this.workspacePath, packageId), this.filterEngineFolder);
        Command filteringContextFileInstallCommand = new InstallFilteringContextFileCommand(basePath, fml2Url);
        filteringContextFileInstallCommand.execute();
    }

    public void installScoreFile(String scoreFileUrl, String packageId) throws IOException, CommandEndedAbnormallyException {
        String basePath = FileUtils.concatenatePath(FileUtils.getFolderPath(this.workspacePath, packageId), this.filterEngineFolder);
        Command filteringContextFileInstallCommand = new InstallFilteringContextFileCommand(basePath, scoreFileUrl);
        filteringContextFileInstallCommand.execute();
    }
}
