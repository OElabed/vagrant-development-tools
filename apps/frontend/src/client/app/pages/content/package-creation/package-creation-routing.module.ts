import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCreationComponent } from './package-creation.component';
import { DetailsChoiceModule } from './details-choice/details-choice.module';
import { ConfigurationsChoiceModule } from './configurations-choice/configurations-choice.module';
import { PlatformChoiceModule } from './platform-choice/platform-choice.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PackageCreationComponent,
        children: [
          {
            path: 'details',
            loadChildren: () => DetailsChoiceModule
          },
          {
            path: 'configurations',
            loadChildren: () => ConfigurationsChoiceModule
          },
          {
            path: 'platform',
            loadChildren: () => PlatformChoiceModule
          },
          {
            path: '',
            redirectTo: 'configurations',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PackageCreationRoutingModule { }
