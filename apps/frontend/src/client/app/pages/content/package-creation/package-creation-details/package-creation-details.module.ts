import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationDetailsRoutingModule } from './package-creation-details-routing.module';
import { SharedModule } from '../../../../common/shared/shared.module';
import { FixFileTreeModule } from '../../../../common/modules/fix-tree-folder/fix-tree-folder.module';

import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';
import { PackageCreationDetailsComponent } from './package-creation-details.component';
import { PackageDetailsModule } from '../../../../common/modules/package-details/package-details.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PackageDetailsModule,
    PackageCreationDetailsRoutingModule
  ],
  declarations: [
    PackageCreationDetailsComponent
  ],
  exports: [
    PackageCreationDetailsComponent
  ],
  providers: [PackageConfigDataService]
})
export class PackageCreationDetailsModule { }
