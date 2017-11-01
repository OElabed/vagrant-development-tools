import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../common/shared/shared.module';
import { FileWrapperUploaderModule } from '../../common/components/files/file-wrapper-uploader/file-wrapper-uploader.module';
import { PackageCreationComponent } from './package-creation.component';
import { PackageConfigComponent } from '../../common/components/configurations/package-config/package-config.component';
import { CoreEngineConfigComponent } from '../../common/components/configurations/core-engine-config/core-engine-config.component';
import { FilterEngineConfigComponent } from '../../common/components/configurations/filter-engine-config/filter-engine-config.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    FileWrapperUploaderModule
  ],
  declarations: [
    PackageCreationComponent,
    PackageConfigComponent,
    CoreEngineConfigComponent,
    FilterEngineConfigComponent
  ],
  exports: [
    PackageCreationComponent,
    PackageConfigComponent,
    CoreEngineConfigComponent,
    FilterEngineConfigComponent
  ]
})
export class PackageCreationModule { }
