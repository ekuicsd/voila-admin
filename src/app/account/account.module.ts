import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
    declarations: [
        LoginPageComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule
    ],
    exports:[
LoginPageComponent

    ]
})
export class AccountModule { }