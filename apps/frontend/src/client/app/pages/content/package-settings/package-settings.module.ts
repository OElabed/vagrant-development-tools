import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageSettingsRoutingModule } from './package-settings-routing.module';
import { SharedModule } from '../../../common/shared/shared.module';
import { PackageSettingsComponent } from './package-settings.component';

@NgModule({
  imports: [CommonModule, SharedModule, PackageSettingsRoutingModule],
  declarations: [PackageSettingsComponent],
  exports: [PackageSettingsComponent]
})
export class PackageSettingsModule { }
