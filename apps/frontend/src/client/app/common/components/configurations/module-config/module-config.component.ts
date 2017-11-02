import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { IModuleConfig, ModuleConfig } from '../../../models/view/module-config.model';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-module-config',
    templateUrl: 'module-config.component.html',
    styleUrls: ['module-config.component.css']
})
export class ModuleConfigComponent {


    @Input() moduleConfig: ModuleConfig;

}
