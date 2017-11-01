import { Component, OnInit } from '@angular/core';

import { IPackage, Package } from '../../../models/package.model';
import { State } from '../../../models/state.model';

import { FileEditorGlobalService } from '../../../services/file-editor-service.service';

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

    constructor(private fileEditorService: FileEditorGlobalService) {

    }

    open() {
        this.fileEditorService.openFileEditor('');
    }
}
