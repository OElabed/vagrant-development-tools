import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { FileUploadConfig } from '../../../models/file-upload-config.model';
import { FileUploader } from 'ng2-file-upload';

import { Archive, IArchive, ArchiveType } from '../../../models/archive.model';
import { Version } from '../../../models/version.model';
import { FileWrapper, FileWrapperType } from '../../../models/file.model';
import { FileEditorGlobalService } from '../../../services/file-editor-service.service';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-file-archive-form',
    templateUrl: 'file-archive-form.component.html',
    styleUrls: ['file-archive-form.component.css']
})
export class FileArchiveComponent {

    @Input()
    urlUpload: string = '';

    @Input()
    archive: Archive;

    archiveUploadConfig: FileUploadConfig;

    constructor() {
        this.archiveUploadConfig = this.initializeArchiveUploadConfig();

        this.archive = this.initializeArchive();
    }

    initializeArchiveUploadConfig(): FileUploadConfig {
        var config = new FileUploadConfig();


        config.maximumSize = 32.6;
        config.maximumSizeByteType = 'Mb';
        config.extensions = ['*.zip', '*.tar.gz'];
        config.canCreate = false;
        return config;
    }

    initializeArchive(): IArchive {
        var archive = new Archive();

        archive.type = ArchiveType.REPOSITORY;
        archive.url = this.urlUpload;
        archive.version = new Version();
        archive.version.version = '5.9.0.0';
        archive.version.push = 'p300';
        return archive;
    }
}
