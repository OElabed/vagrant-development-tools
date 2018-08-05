import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PackageCreationDataService } from '../../../../common/services/data/package-creation.data.service';
import { ContainerService } from '../../../../common/services/external/containers.api.service';
import { SharedModule } from '../../../../common/shared/shared.module';
import { PlatformChoiceRoutingModule } from './platform-choice-routing.module';
import { PlatformChoiceComponent } from './platform-choice.component';

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
  providers: [PackageCreationDataService, ContainerService]
})
export class PlatformChoiceModule { }
