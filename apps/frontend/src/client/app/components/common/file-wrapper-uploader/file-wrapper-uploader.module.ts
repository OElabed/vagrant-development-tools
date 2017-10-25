import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FileWrapperUploaderComponent } from './file-wrapper-uploader.component';

@NgModule({
  imports: [CommonModule, SharedModule, ],
  declarations: [FileWrapperUploaderComponent],
  exports: [FileWrapperUploaderComponent]
})
export class FileWrapperUploaderModule { }
