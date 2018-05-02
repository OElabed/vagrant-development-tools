import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { ContainerChoiceRoutingModule } from './container-choice-routing.module';
import { ContainerChoiceComponent } from './container-choice.component';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';

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
  providers: [PackageConfigDataService]
})
export class ContainerChoiceModule { }
