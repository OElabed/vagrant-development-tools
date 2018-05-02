import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerChoiceComponent } from './container-choice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ContainerChoiceComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ContainerChoiceRoutingModule { }
