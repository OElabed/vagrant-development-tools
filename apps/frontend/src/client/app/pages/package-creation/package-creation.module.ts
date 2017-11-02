import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../common/shared/shared.module';
import { AddFileFormModule } from '../../common/components/forms/add-file-form/add-file-form.module';
import { PackageCreationComponent } from './package-creation.component';
import { PackageConfigComponent } from '../../common/components/configurations/package-config/package-config.component';
import { CoreEngineConfigComponent } from '../../common/components/configurations/core-engine-config/core-engine-config.component';
import { FilterEngineConfigComponent } from '../../common/components/configurations/filter-engine-config/filter-engine-config.component';
import { ModulesAllConfigComponent } from '../../common/components/configurations/modules-all-config/modules-all-config.component';
import { ModuleConfigComponent } from '../../common/components/configurations/module-config/module-config.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    AddFileFormModule
  ],
  declarations: [
    PackageCreationComponent,
    PackageConfigComponent,
    CoreEngineConfigComponent,
    FilterEngineConfigComponent,
    ModulesAllConfigComponent,
    ModuleConfigComponent
  ],
  exports: [
    PackageCreationComponent,
    PackageConfigComponent,
    CoreEngineConfigComponent,
    FilterEngineConfigComponent,
    ModulesAllConfigComponent,
    ModuleConfigComponent
  ]
})
export class PackageCreationModule { }
