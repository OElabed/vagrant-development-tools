import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageCreationComponent } from './package-creation.component';
import { TemplateChoiceModule } from './template-choice/template-choice.module';
import { PackageCreationDetailsModule } from './package-creation-details/package-creation-details.module';
import { ContainerChoiceModule } from './container-choice/container-choice.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PackageCreationComponent,
        children: [
          {
            path: 'template',
            loadChildren: () => TemplateChoiceModule
          },
          {
            path: 'details',
            loadChildren: () => PackageCreationDetailsModule
          },
          {
            path: 'container',
            loadChildren: () => ContainerChoiceModule
          },
          {
            path: '',
            redirectTo: 'container',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PackageCreationRoutingModule { }
