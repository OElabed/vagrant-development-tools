import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { IPackageFormConfig, PackageFormConfig } from '../../../models/view/package-config.model';


declare let jQuery: any;

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-module-all-config',
    templateUrl: 'modules-all-config.component.html',
    styleUrls: ['modules-all-config.component.css']
})
export class ModulesAllConfigComponent {


    @Input() package: PackageFormConfig;
    @Output() packageChange: EventEmitter<PackageFormConfig>;

    constructor() {
        this.packageChange = new EventEmitter<PackageFormConfig>();

    }


}
