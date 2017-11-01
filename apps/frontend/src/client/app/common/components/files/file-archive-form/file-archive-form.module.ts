import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FileArchiveComponent } from './file-archive-form.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule, SharedModule, FileUploadModule],
  declarations: [FileArchiveComponent],
  exports: [FileArchiveComponent]
})
export class FileArchiveModule { }
