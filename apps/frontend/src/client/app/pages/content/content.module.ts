import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared/shared.module';
import { TemplatePackageService } from '../../common/services/external/template-package.api.service';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FileEditorModule } from './file-editor/file-editor.module';
import { PackageSettingsModule } from './package-settings/package-settings.module';
import { PackageCreationModule } from './package-creation/package-creation.module';
import { HeaderbarComponent } from './layout/headerbar/headerbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    ContentRoutingModule,
    DashboardModule,
    FileEditorModule,
    PackageSettingsModule,
    PackageCreationModule,
  ],
  declarations: [
    ContentComponent,
    HeaderbarComponent,
    SidebarComponent
  ],
  exports: [
    ContentComponent,
    HeaderbarComponent,
    SidebarComponent
  ]
})
export class ContentModule { }
