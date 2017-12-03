import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentModule } from './pages/content/content.module';
import { LoginModule } from './pages/login/login.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';

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
        path: 'notfound',
        loadChildren: () => PageNotFoundModule
      },
      {
        path: '',
        redirectTo: 'content',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'notfound'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

