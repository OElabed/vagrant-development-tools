import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../common/shared/shared.module';
import { AddFileFormModule } from '../../common/components/forms/add-file-form/add-file-form.module';
import { PackageCreationComponent } from './package-creation.component';
import { PackageConfigComponent } from '../../common/components/configurations/package-config/package-config.component';
import { YamlConfigComponent } from '../../common/components/configurations/yaml-config/yaml-config.component';
import { TemplateConfigComponent } from '../../common/components/configurations/template-config/template-config.component';
import { TemplatePackageService } from '../../common/services/template-package.service';
import { ContainerService } from '../../common/services/containers.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    AddFileFormModule
  ],
  declarations: [
    PackageCreationComponent,
    PackageConfigComponent,
    YamlConfigComponent,
    TemplateConfigComponent
  ],
  exports: [
    PackageCreationComponent,
    PackageConfigComponent,
    YamlConfigComponent,
    TemplateConfigComponent
  ],
  providers: [TemplatePackageService, ContainerService]
})
export class PackageCreationModule { }
