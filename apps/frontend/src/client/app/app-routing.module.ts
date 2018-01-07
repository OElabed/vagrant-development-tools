import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentModule } from './pages/content/content.module';
import { LoginModule } from './pages/login/login.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { AuthGuard } from './common/guard/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'content',
        loadChildren: () => ContentModule,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
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
        pathMatch: 'full',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
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

