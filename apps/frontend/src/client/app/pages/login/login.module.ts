import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared/shared.module';
import { LoginComponent } from './login.component';
import { TemplatePackageService } from '../../common/services/external/template-package.api.service';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from '../../common/services/external/authentication.api.service';

@NgModule({
  imports: [CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
   LoginComponent
  ],
  exports: [
   LoginComponent
  ],
  providers: [TemplatePackageService, AuthenticationService]
})
export class LoginModule { }
