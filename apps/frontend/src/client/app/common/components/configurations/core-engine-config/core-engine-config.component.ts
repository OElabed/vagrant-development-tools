// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { CoreEngineConfig, ICoreEngineConfig } from '../../../models/view/core-engine-config.model';
// import { PackageFormConfig, IPackageFormConfig } from '../../../models/view/package-config.model';
// import { AddFileFormConfig, IAddFileFormConfig, AddFileFormType } from '../../../models/view/add-file-config.model';
// import { FileUploaderFormConfig, IFileUploaderFormConfig } from '../../../models/view/file-upload-config.model';

// /**
//  * This class represents the lazy loaded DashboardComponent.
//  */
// @Component({
//     moduleId: module.id,
//     selector: 'fix-core-engine-config',
//     templateUrl: 'core-engine-config.component.html',
//     styleUrls: ['core-engine-config.component.css']
// })
// export class CoreEngineConfigComponent {

//     @Input() package: PackageFormConfig;
//     @Output() packageChange: EventEmitter<PackageFormConfig>;

//     config: ICoreEngineConfig;

//     constructor() {
//         this.packageChange = new EventEmitter<PackageFormConfig>();
//         this.config = this.initializeCoreEngineConfig();
//     }

//     initializeCoreEngineConfig(): ICoreEngineConfig {
//         var config = new CoreEngineConfig();

//         config.archiveConfig = new AddFileFormConfig();
//         config.archiveConfig.type = AddFileFormType.URL;
//         config.archiveConfig.urlFile = '';

//         config.archiveConfig.fileUploaderConfig = new FileUploaderFormConfig();
//         config.archiveConfig.fileUploaderConfig.urlToUpload = 'http://sdfsfsdfsdfsdf';
//         config.archiveConfig.fileUploaderConfig.maximumSize = 32.6;
//         config.archiveConfig.fileUploaderConfig.maximumSizeByteType = 'Mb';
//         config.archiveConfig.fileUploaderConfig.extensions = ['*.zip', '*.tar.gz'];
//         config.archiveConfig.fileUploaderConfig.canCreate = false;

//         return config;
//     }
// }
