import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './common/shared/shared.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PackageSettingsModule } from './pages/package-settings/package-settings.module';
import { PackageCreationModule } from './pages/package-creation/package-creation.module';
import { FileEditorModule } from './pages/file-editor/file-editor.module';


@NgModule({
  imports: [BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    FileEditorModule,
    PackageSettingsModule,
    PackageCreationModule,
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
