import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ConfirmFormComponent } from './confirm-form.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ConfirmFormComponent],
  exports: [ConfirmFormComponent]
})
export class ConfirmFormModule { }
