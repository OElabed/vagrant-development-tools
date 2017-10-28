import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FileEditorComponent } from './file-editor.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FileEditorComponent],
  exports: [FileEditorComponent]
})
export class FileEditorModule { }
