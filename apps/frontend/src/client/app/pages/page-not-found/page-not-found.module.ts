import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared/shared.module';
import { TemplatePackageService } from '../../common/services/external/template-package.api.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    PageNotFoundRoutingModule
  ],
  declarations: [
   PageNotFoundComponent
  ],
  exports: [
   PageNotFoundComponent
  ],
  providers: [TemplatePackageService]
})
export class PageNotFoundModule { }
