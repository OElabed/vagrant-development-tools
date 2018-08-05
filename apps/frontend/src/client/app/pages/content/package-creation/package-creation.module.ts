import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../../common/shared/shared.module';
import { FixFileTreeModule } from '../../../common/modules/fix-tree-folder/fix-tree-folder.module';

import { PackageCreationComponent } from './package-creation.component';
import { TemplatePackageService } from '../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../common/services/external/containers.api.service';
import { ContextmenuModule } from '../../../common/modules/fix-context-menu/contextmenu.module';
import { ConfirmFormModule } from '../../../common/components/forms/confirm-form/confirm-form.module';
import { PackageCreationDataService } from '../../../common/services/data/package-creation.data.service';
import { YamlConfigService } from '../../../common/services/external/yaml-config.api.service';
import { DetailsChoiceModule } from './details-choice/details-choice.module';
import { ConfigurationsChoiceModule } from './configurations-choice/configurations-choice.module';
import { PlatformChoiceModule } from './platform-choice/platform-choice.module';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    PlatformChoiceModule,
    ConfirmFormModule,
    FixFileTreeModule,
    ContextmenuModule,
    ConfigurationsChoiceModule,
    DetailsChoiceModule
  ],
  declarations: [
    PackageCreationComponent
  ],
  exports: [
    PackageCreationComponent,
  ],
  providers: [TemplatePackageService, ContainerService, PackageCreationDataService, YamlConfigService]
})
export class PackageCreationModule { }
