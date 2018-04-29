import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../../common/shared/shared.module';
import { AddFileFormModule } from '../../../common/components/forms/add-file-form/add-file-form.module';
import { FixFileTreeModule } from '../../../common/modules/fix-tree-folder/fix-tree-folder.module';

import { PackageCreationComponent } from './package-creation.component';
import { PackageEditComponent } from '../../../common/components/configurations/package-config/package-edit.component';
import {
  CoreEngineEditComponent
} from '../../../common/components/configurations/package-config/core-engine-edit/core-engine-edit.component';
import { GeneralEditComponent } from '../../../common/components/configurations/package-config/general-edit/general-edit.component';
import { BackendEditComponent } from '../../../common/components/configurations/package-config/backend-edit/backend-edit.component';
import { DatabaseEditComponent } from '../../../common/components/configurations/package-config/database-edit/database-edit.component';
import {
  FilterEngineEditComponent
} from '../../../common/components/configurations/package-config/filter-engine-edit/filter-engine-edit.component';
import { ModuleEditComponent } from '../../../common/components/configurations/package-config/module-edit/module-edit.component';
import { YamlConfigComponent } from '../../../common/components/configurations/yaml-config/yaml-config.component';
import { TemplateConfigComponent } from '../../../common/components/configurations/template-config/template-config.component';
import { TemplatePackageService } from '../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../common/services/external/containers.api.service';
import { ContextmenuModule } from '../../../common/modules/fix-context-menu/contextmenu.module';
import { ConfirmFormModule } from '../../../common/components/forms/confirm-form/confirm-form.module';
import { PackageConfigDataService } from '../../../common/services/data/package.data.service';
import { YamlConfigService } from '../../../common/services/external/yaml-config.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    ConfirmFormModule,
    AddFileFormModule,
    FixFileTreeModule,
    ContextmenuModule
  ],
  declarations: [
    PackageCreationComponent,
    PackageEditComponent,
    YamlConfigComponent,
    TemplateConfigComponent,
    CoreEngineEditComponent,
    FilterEngineEditComponent,
    ModuleEditComponent,
    GeneralEditComponent,
    BackendEditComponent,
    DatabaseEditComponent
  ],
  exports: [
    PackageCreationComponent,
    PackageEditComponent,
    YamlConfigComponent,
    TemplateConfigComponent,
    CoreEngineEditComponent,
    FilterEngineEditComponent,
    ModuleEditComponent,
    GeneralEditComponent,
    BackendEditComponent,
    DatabaseEditComponent
  ],
  providers: [TemplatePackageService, ContainerService, PackageConfigDataService, YamlConfigService]
})
export class PackageCreationModule { }
