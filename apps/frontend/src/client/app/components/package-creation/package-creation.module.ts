import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PackageCreationComponent } from './package-creation.component';

@NgModule({
  imports: [CommonModule, SharedModule, PackageCreationRoutingModule],
  declarations: [PackageCreationComponent],
  exports: [PackageCreationComponent]
})
export class PackageCreationModule { }
