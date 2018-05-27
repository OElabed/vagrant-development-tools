import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlatformChoiceComponent } from './platform-choice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PlatformChoiceComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PlatformChoiceRoutingModule { }
