import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PackageFormConfig, IPackageFormConfig } from '../../../models/view/package-config.model';
import { AddFileFormConfig, IAddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
import { FilterEngineConfig, IFilterEngineConfig } from '../../../models/view/filter-engine-config.model';
import { FileUploaderFormConfig, IFileUploaderFormConfig } from '../../../models/view/file-upload-config.model';


/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-filter-engine-config',
    templateUrl: 'filter-engine-config.component.html',
    styleUrls: ['filter-engine-config.component.css']
})
export class FilterEngineConfigComponent {

    @Input() package: PackageFormConfig;
    @Output() packageChange: EventEmitter<PackageFormConfig>;

    filterEngineConfig: FilterEngineConfig;
    fml2FileActive: boolean;
    scoreFileActive: boolean;

    constructor() {
        this.packageChange = new EventEmitter<PackageFormConfig>();

        this.filterEngineConfig = this.initializeFilterEngineConfig();
        this.fml2FileActive = false;
        this.scoreFileActive = false;
    }

    initializeFilterEngineConfig(): IFilterEngineConfig {
        var config = new FilterEngineConfig();

        config.archiveConfig = this.initializeArchiveConfig();
        config.kzFileConfig = this.initializeKzConfig();
        config.fmlFile1Config = this.initializeFmlFile1Config();
        config.fmlFile2Config = this.initializeFmlFile2Config();
        config.scoreFileConfig = this.initializeScoreFileConfig();
        config.licenceFileConfig = this.initializeLicenceConfig();

        return config;
    }

    initializeArchiveConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Mb';
        config.fileUploaderConfig.extensions = ['*.zip', '*.tar.gz'];
        config.fileUploaderConfig.canCreate = false;

        return config;
    }

    initializeKzConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Mb';
        config.fileUploaderConfig.extensions = ['FOFDB.kz'];
        config.fileUploaderConfig.canCreate = false;

        return config;
    }

    initializeFmlFile1Config(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileUploaderConfig.extensions = ['fml.rul', 'fml1.rul'];
        config.fileUploaderConfig.canCreate = true;
        config.fileUploaderConfig.templateCreation = `// ... some  fml file !`;

        return config;
    }

    initializeFmlFile2Config(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileUploaderConfig.extensions = ['fml.rul', 'fml1.rul'];
        config.fileUploaderConfig.canCreate = true;
        config.fileUploaderConfig.templateCreation = `// ... some  fml file !`;

        return config;
    }

    initializeScoreFileConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileUploaderConfig.extensions = ['score.scd'];
        config.fileUploaderConfig.canCreate = true;
        config.fileUploaderConfig.templateCreation = `// ... some  score file !`;

        return config;
    }

    initializeLicenceConfig(): IAddFileFormConfig {
        var config = new AddFileFormConfig();

        config.type = AddFileFormType.URL;
        config.urlFile = '';
        config.fileUploaderConfig = new FileUploaderFormConfig();

        config.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
        config.fileUploaderConfig.maximumSize = 16.0;
        config.fileUploaderConfig.maximumSizeByteType = 'Kb';
        config.fileUploaderConfig.extensions = ['*.cf'];
        config.fileUploaderConfig.canCreate = false;

        return config;
    }

    setFml2File() {
        this.fml2FileActive = !this.fml2FileActive;
    }

    setScoreFile() {
        this.scoreFileActive = !this.scoreFileActive;
    }
}
