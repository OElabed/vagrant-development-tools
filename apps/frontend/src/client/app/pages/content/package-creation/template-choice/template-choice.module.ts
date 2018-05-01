import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TemplateChoiceRoutingModule } from './template-choice-routing.module';
import { TemplateChoiceComponent } from './template-choice.component';
import { PackageConfigDataService } from '../../../../common/services/data/package.data.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    TemplateChoiceRoutingModule
  ],
  declarations: [
    TemplateChoiceComponent
  ],
  exports: [
    TemplateChoiceComponent
  ],
  providers: [PackageConfigDataService]
})
export class TemplateChoiceModule { }
