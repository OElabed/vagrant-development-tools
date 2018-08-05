import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { ConfigurationChoiceRoutingModule } from './configurations-choice-routing.module';
import { ConfigurationsChoiceComponent } from './configurations-choice.component';
import { PackageCreationDataService } from '../../../../common/services/data/package-creation.data.service';
import { TemplatePackageService } from '../../../../common/services/external/template-package.api.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    ConfigurationChoiceRoutingModule
  ],
  declarations: [
    ConfigurationsChoiceComponent
  ],
  exports: [
    ConfigurationsChoiceComponent
  ],
  providers: [PackageCreationDataService, TemplatePackageService, ContainerService]
})
export class ConfigurationsChoiceModule { }
