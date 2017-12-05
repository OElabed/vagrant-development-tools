import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AddFileFormComponent } from './add-file-form.component';

import { FileUploaderFormModule } from '../file-uploader-form/file-uploader-form.module';

@NgModule({
  imports: [CommonModule, SharedModule, FileUploaderFormModule],
  declarations: [AddFileFormComponent],
  exports: [AddFileFormComponent]
})
export class AddFileFormModule { }
