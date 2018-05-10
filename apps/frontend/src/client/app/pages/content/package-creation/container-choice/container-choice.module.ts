import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { ContainerChoiceRoutingModule } from './container-choice-routing.module';
import { ContainerChoiceComponent } from './container-choice.component';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { TemplatePackageService } from '../../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    ContainerChoiceRoutingModule
  ],
  declarations: [
    ContainerChoiceComponent
  ],
  exports: [
    ContainerChoiceComponent
  ],
  providers: [PackageConfigDataService, TemplatePackageService, ContainerService]
})
export class ContainerChoiceModule { }
