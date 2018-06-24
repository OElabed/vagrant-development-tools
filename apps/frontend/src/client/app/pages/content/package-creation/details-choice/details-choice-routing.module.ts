import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsChoiceComponent } from './details-choice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DetailsChoiceComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class DetailsChoiceRoutingModule { }
