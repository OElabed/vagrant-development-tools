import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { IAddFileFormConfig, AddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-add-file-form',
    templateUrl: 'add-file-form.component.html',
    styleUrls: ['add-file-form.component.css']
})
export class AddFileFormComponent {

    @Input() active: boolean;

    @Input() config: IAddFileFormConfig;

    radioId = UUID.UUID();
    addFileType: string;

    constructor() {
        this.config = this.initializeConfig();
        this.active = true;
        this.addFileType = AddFileFormType[this.config.type];
    }

    initializeConfig(): IAddFileFormConfig {
        const config = new AddFileFormConfig();
        config.type = AddFileFormType.URL;
        config.urlFile = '';
        return config;
    }

    activeType(type: string) {
        if (this.active) {
            this.config.type = (<any>AddFileFormType)[type];
            this.addFileType = type;
        }
    }
}
