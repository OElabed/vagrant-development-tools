import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PackageCreationComponent } from './package-creation.component';
import { PackageConfigComponent } from '../configurations/package-config/package-config.component';
import { CoreEngineConfigComponent } from '../configurations/core-engine-config/core-engine-config.component';
import { FilterEngineConfigComponent } from '../configurations/filter-engine-config/filter-engine-config.component';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    FileUploadModule
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
