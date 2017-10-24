import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCreationRoutingModule } from './package-creation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PackageCreationComponent } from './package-creation.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PackageCreationRoutingModule,
    FileUploadModule
  ],
  declarations: [PackageCreationComponent],
  exports: [PackageCreationComponent]
})
export class PackageCreationModule { }
