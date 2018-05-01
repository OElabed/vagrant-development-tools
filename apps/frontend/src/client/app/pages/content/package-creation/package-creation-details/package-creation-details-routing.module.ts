import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCreationDetailsComponent } from './package-creation-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PackageCreationDetailsComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PackageCreationDetailsRoutingModule { }
