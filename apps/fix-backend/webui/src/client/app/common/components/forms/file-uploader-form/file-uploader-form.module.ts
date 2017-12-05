import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FileUploaderFormComponent } from './file-uploader-form.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule, SharedModule, FileUploadModule],
  declarations: [FileUploaderFormComponent],
  exports: [FileUploaderFormComponent]
})
export class FileUploaderFormModule { }
