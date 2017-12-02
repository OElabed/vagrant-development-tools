import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCreationComponent } from './package-creation.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PackageCreationComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PackageCreationRoutingModule { }
