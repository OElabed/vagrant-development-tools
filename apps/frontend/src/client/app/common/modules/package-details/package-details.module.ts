import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageDetailsRoutingModule } from './package-details-routing.module';
import { SharedModule } from '../../../common/shared/shared.module';
import { FixFileTreeModule } from '../../../common/modules/fix-tree-folder/fix-tree-folder.module';
import { PackageDetailsComponent } from './package-details.component';
import { ContainerService } from '../../../common/services/external/containers.api.service';
import { ContextmenuModule } from '../../../common/modules/fix-context-menu/contextmenu.module';
import { ConfirmFormModule } from '../../../common/components/forms/confirm-form/confirm-form.module';
import { PackageConfigDataService } from '../../../common/services/data/package.data.service';
import { CoreEngineEditComponent } from './core-engine-edit/core-engine-edit.component';
import { FilterEngineEditComponent } from './filter-engine-edit/filter-engine-edit.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { GeneralEditComponent } from './general-edit/general-edit.component';
import { BackendEditComponent } from './backend-edit/backend-edit.component';
import { DatabaseEditComponent } from './database-edit/database-edit.component';
import { YamlConfigComponent } from './yaml-config/yaml-config.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageDetailsRoutingModule,
    ConfirmFormModule,
    FixFileTreeModule,
    ContextmenuModule
  ],
  declarations: [
    PackageDetailsComponent,
    YamlConfigComponent,
    CoreEngineEditComponent,
    FilterEngineEditComponent,
    ModuleEditComponent,
    GeneralEditComponent,
    BackendEditComponent,
    DatabaseEditComponent
  ],
  exports: [
    PackageDetailsComponent,
    YamlConfigComponent,
    CoreEngineEditComponent,
    FilterEngineEditComponent,
    ModuleEditComponent,
    GeneralEditComponent,
    BackendEditComponent,
    DatabaseEditComponent
  ],
  providers: []
})
export class PackageDetailsModule { }
