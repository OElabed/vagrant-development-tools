// import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

// import { IPackageFormConfig, PackageFormConfig } from '../../../models/view/package-config.model';
// import { ModuleType, ModuleTypeUtil } from '../../../models/domain/module.model';
// import { ModuleConfig, IModuleConfig } from '../../../models/view/module-config.model';


// declare let jQuery: any;

// /**
//  * This class represents the lazy loaded DashboardComponent.
//  */
// @Component({
//     moduleId: module.id,
//     selector: 'fix-module-all-config',
//     templateUrl: 'modules-all-config.component.html',
//     styleUrls: ['modules-all-config.component.css']
// })
// export class ModulesAllConfigComponent {


//     @Input() package: PackageFormConfig;
//     @Output() packageChange: EventEmitter<PackageFormConfig>;

//     moduleTypeList: string[];

//     activeModule: string;

//     moduleConfigList: IModuleConfig[];

//     constructor() {
//         this.packageChange = new EventEmitter<PackageFormConfig>();
//         this.moduleTypeList = ModuleTypeUtil.getListNameModuleType();
//         this.moduleConfigList = [];
//         this.activeModule = 'none';
//     }

//     setModuleActive(module: string) {
//         this.activeModule = module;
//     }

//     addModule(module: string) {
//         var exist: boolean = this.isExist(module);

//         if (!exist) {
//             var moduleConfig = new ModuleConfig();
//             moduleConfig.name = module;
//             moduleConfig.type = ModuleTypeUtil.toModuleType(module);
//             this.moduleConfigList.push(moduleConfig);
//         }
//         this.setModuleActive(module);
//     }

//     isExist(module: string): boolean {
//         var exist: boolean = false;
//         this.moduleConfigList.forEach(element => {
//             if (element.name === module) {
//                 exist = true;
//             }
//         });
//         return exist;
//     }

//     deleteModule(module: string) {

//         var indexModule: number;

//         this.moduleConfigList.forEach((element, index) => {
//             if (element.name === module) {
//                 indexModule = index;
//             }
//         });

//         this.moduleConfigList.splice(indexModule, 1);

//         if (module === this.activeModule && this.moduleConfigList.length > 0) {
//             this.activeModule = this.moduleConfigList[this.moduleConfigList.length - 1].name;
//         }
//     }

// }
