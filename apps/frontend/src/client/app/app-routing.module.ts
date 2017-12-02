import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentModule } from './pages/content/content.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'content',
        loadChildren: () => ContentModule
      },
      {
        path: 'login',
        loadChildren: () => LoginModule
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
      // },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

