import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { PackageSettingsModule } from './components/package-settings/package-settings.module';
import { PackageCreationModule } from './components/package-creation/package-creation.module';
import { FileEditorModule } from './components/common/file-editor/file-editor.module';


@NgModule({
  imports: [BrowserModule,
    HttpModule,
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
