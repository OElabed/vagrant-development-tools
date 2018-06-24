import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCreationComponent } from './package-creation.component';
import { PackageCreationDetailsModule } from './package-creation-details/package-creation-details.module';
import { DetailsChoiceModule } from './details-choice/details-choice.module';
import { PlatformChoiceModule } from './platform-choice/platform-choice.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PackageCreationComponent,
        children: [
          {
            path: 'details2',
            loadChildren: () => PackageCreationDetailsModule
          },
          {
            path: 'details',
            loadChildren: () => DetailsChoiceModule
          },
          {
            path: 'platform',
            loadChildren: () => PlatformChoiceModule
          },
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PackageCreationRoutingModule { }
