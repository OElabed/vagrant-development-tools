import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './common/shared/shared.module';
import { LoginModule } from './pages/login/login.module';
import { ContentModule } from './pages/content/content.module';


@NgModule({
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    ContentModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
