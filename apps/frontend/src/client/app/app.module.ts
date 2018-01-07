import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './common/shared/shared.module';
import { LoginModule } from './pages/login/login.module';
import { ContentModule } from './pages/content/content.module';
import { AuthGuard } from './common/guard/auth.guard';
import { HttpClientXsrfModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    LoginModule,
    ContentModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }
