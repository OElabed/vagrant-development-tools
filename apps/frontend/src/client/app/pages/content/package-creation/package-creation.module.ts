import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../../common/shared/shared.module';
import { AddFileFormModule } from '../../../common/components/forms/add-file-form/add-file-form.module';
import { FixFileTreeModule } from '../../../common/modules/fix-tree-folder/fix-tree-folder.module';

import { PackageCreationComponent } from './package-creation.component';
import { TemplatePackageService } from '../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../common/services/external/containers.api.service';
import { ContextmenuModule } from '../../../common/modules/fix-context-menu/contextmenu.module';
import { ConfirmFormModule } from '../../../common/components/forms/confirm-form/confirm-form.module';
import { PackageConfigDataService } from '../../../common/services/data/package.data.service';
import { YamlConfigService } from '../../../common/services/external/yaml-config.api.service';
import { TemplateChoiceModule } from './template-choice/template-choice.module';
import { PackageCreationDetailsModule } from './package-creation-details/package-creation-details.module';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    ConfirmFormModule,
    AddFileFormModule,
    FixFileTreeModule,
    ContextmenuModule,
    TemplateChoiceModule,
    PackageCreationDetailsModule
  ],
  declarations: [
    PackageCreationComponent
  ],
  exports: [
    PackageCreationComponent,
  ],
  providers: [TemplatePackageService, ContainerService, PackageConfigDataService, YamlConfigService]
})
export class PackageCreationModule { }
