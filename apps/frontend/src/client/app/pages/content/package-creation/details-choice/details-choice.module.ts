import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsChoiceRoutingModule } from './details-choice-routing.module';
import { SharedModule } from '../../../../common/shared/shared.module';
import { FixFileTreeModule } from '../../../../common/modules/fix-tree-folder/fix-tree-folder.module';

import { PackageCreationDataService } from '../../../../common/services/data/package-creation.data.service';
import { DetailsChoiceComponent } from './details-choice.component';
import { PackageDetailsModule } from '../../../../common/modules/package-details/package-details.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PackageDetailsModule,
    DetailsChoiceRoutingModule
  ],
  declarations: [
    DetailsChoiceComponent
  ],
  exports: [
    DetailsChoiceComponent
  ],
  providers: [PackageCreationDataService]
})
export class DetailsChoiceModule { }
