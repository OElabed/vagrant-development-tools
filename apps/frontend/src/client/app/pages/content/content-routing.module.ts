import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PackageSettingsModule } from './package-settings/package-settings.module';
import { PackageCreationModule } from './package-creation/package-creation.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ContentComponent,
        children: [
          {
            path: 'dashborad',
            loadChildren: () => DashboardModule
          },
          {
            path: 'settings',
            loadChildren: () => PackageSettingsModule
          },
          {
            path: 'creation',
            loadChildren: () => PackageCreationModule
          },
          {
            path: '',
            redirectTo: 'dashborad',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
