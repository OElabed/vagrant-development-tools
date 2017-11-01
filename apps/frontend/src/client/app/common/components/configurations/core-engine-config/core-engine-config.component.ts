import { Component, OnInit } from '@angular/core';
import { FileUploadConfig } from '../../../models/file-upload-config.model';

import { IPackage, Package } from '../../../models/package.model';
import { IArchive, Archive, ArchiveType } from '../../../models/archive.model';
import { State } from '../../../models/state.model';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-core-engine-config',
    templateUrl: 'core-engine-config.component.html',
    styleUrls: ['core-engine-config.component.css']
})
export class CoreEngineConfigComponent {

    coreEngineArchiveUploadConfig: FileUploadConfig;

    constructor() {
        this.coreEngineArchiveUploadConfig = this.initializeCoreEngineArchiveUploadConfig();
    }

    initializeCoreEngineArchiveUploadConfig(): FileUploadConfig {
        var config = new FileUploadConfig();

        config.url = 'http://sdfsfsdfsdfsdf';
        config.maximumSize = 32.6;
        config.maximumSizeByteType = 'Mb';
        config.extensions = ['*.zip', '*.tar.gz'];
        config.canCreate = false;
        return config;
    }


    initializeArchive(): IArchive {
        var archive = new Archive();

        archive.type = ArchiveType.REPOSITORY;
        archive.url = '';

        return archive;
    }
}
