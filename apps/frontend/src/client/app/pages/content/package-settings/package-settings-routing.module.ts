import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageSettingsComponent } from './package-settings.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PackageSettingsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PackageSettingsRoutingModule { }
