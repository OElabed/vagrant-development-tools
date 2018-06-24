import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { DetailsChoiceRoutingModule } from './details-choice-routing.module';
import { DetailsChoiceComponent } from './details-choice.component';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { TemplatePackageService } from '../../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    DetailsChoiceRoutingModule
  ],
  declarations: [
    DetailsChoiceComponent
  ],
  exports: [
    DetailsChoiceComponent
  ],
  providers: [PackageConfigDataService, TemplatePackageService, ContainerService]
})
export class DetailsChoiceModule { }
