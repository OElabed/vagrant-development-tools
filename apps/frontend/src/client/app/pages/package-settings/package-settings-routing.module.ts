import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageSettingsComponent } from './package-settings.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'settings', component: PackageSettingsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PackageSettingsRoutingModule { }
