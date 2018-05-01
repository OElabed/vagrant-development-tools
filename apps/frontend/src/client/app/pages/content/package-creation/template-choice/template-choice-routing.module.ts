import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateChoiceComponent } from './template-choice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TemplateChoiceComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TemplateChoiceRoutingModule { }
