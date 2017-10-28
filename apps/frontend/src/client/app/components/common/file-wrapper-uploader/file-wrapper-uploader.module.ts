import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FileWrapperUploaderComponent } from './file-wrapper-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule, SharedModule, FileUploadModule],
  declarations: [FileWrapperUploaderComponent],
  exports: [FileWrapperUploaderComponent]
})
export class FileWrapperUploaderModule { }
