import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { PlatformChoiceRoutingModule } from './platform-choice-routing.module';
import { PlatformChoiceComponent } from './platform-choice.component';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { TemplatePackageService } from '../../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PlatformChoiceRoutingModule
  ],
  declarations: [
    PlatformChoiceComponent
  ],
  exports: [
    PlatformChoiceComponent
  ],
  providers: [PackageConfigDataService, ContainerService]
})
export class PlatformChoiceModule { }
