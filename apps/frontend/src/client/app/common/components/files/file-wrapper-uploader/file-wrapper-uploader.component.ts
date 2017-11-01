import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { FileUploadConfig } from '../../../models/file-upload-config.model';
import { FileUploader } from 'ng2-file-upload';

import { FileEditorGlobalService } from '../../../services/file-editor-service.service';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-file-wrapper-uploader',
    templateUrl: 'file-wrapper-uploader.component.html',
    styleUrls: ['file-wrapper-uploader.component.css']
})
export class FileWrapperUploaderComponent {

    @Input()
    url: string;

    @Input()
    config: FileUploadConfig;

    @Input()
    active: boolean = true;

    uploader: FileUploader;
    dropZoneOver: boolean = false;

    uploadFromExplorerId = UUID.UUID();

    constructor(private fileEditorService: FileEditorGlobalService) {
        this.url =  '';
        this.config = this.initializeConfig();
        this.uploader = new FileUploader({ url: this.url });
    }

    public fileOver(e: any): void {
        this.dropZoneOver = e;
    }

    initializeConfig(): FileUploadConfig {

        var config = new FileUploadConfig();
        config.maximumSize = 0;
        config.maximumSizeByteType = 'Mb';
        config.extensions = [];
        config.templateCreation = '';
        config.canCreate = false;

        return config;

    }

    addFileFromExplorer() {
        jQuery('#' + this.uploadFromExplorerId).trigger('click');
    }

    createFile() {
        this.fileEditorService.openFileEditor(this.config.templateCreation);
    }
}
