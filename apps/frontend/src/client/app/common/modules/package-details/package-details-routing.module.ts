import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageDetailsComponent } from './package-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PackageDetailsComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PackageDetailsRoutingModule { }
