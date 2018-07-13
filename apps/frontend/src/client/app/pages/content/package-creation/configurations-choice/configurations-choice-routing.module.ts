import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigurationsChoiceComponent } from './configurations-choice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConfigurationsChoiceComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ConfigurationChoiceRoutingModule { }
