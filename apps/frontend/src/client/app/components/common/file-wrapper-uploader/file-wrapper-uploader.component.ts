import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

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

    uploader: FileUploader;
    dropZoneOver: boolean = false;

    constructor() {
        this.uploader = new FileUploader({ url: this.url });
    }

    public fileOver(e: any): void {
        this.dropZoneOver = e;
    }
}
