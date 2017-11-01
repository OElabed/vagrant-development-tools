import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { FileUploaderFormConfig } from '../../../models/view/file-upload-config.model';
import { FileUploader } from 'ng2-file-upload';

import { FileEditorGlobalService } from '../../../services/file-editor-service.service';

declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-file-uploader-form',
    templateUrl: 'file-uploader-form.component.html',
    styleUrls: ['file-uploader-form.component.css']
})
export class FileUploaderFormComponent {

    @Input()
    config: FileUploaderFormConfig;

    @Input()
    active: boolean = true;

    uploader: FileUploader;
    dropZoneOver: boolean = false;

    uploadFromExplorerId = UUID.UUID();

    constructor(private fileEditorService: FileEditorGlobalService) {
        this.config = this.initializeConfig();
        this.uploader = new FileUploader({ url: this.config.urlToUpload });
    }

    public fileOver(e: any): void {
        this.dropZoneOver = e;
    }

    initializeConfig(): FileUploaderFormConfig {

        var config = new FileUploaderFormConfig();
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
