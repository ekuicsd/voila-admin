import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login', component:LoginPageComponent
    },
    {
        path: 'change-password', component: ChangePasswordComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent
    }
]
@NgModule({
    declarations: [
        LoginPageComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AccountModule { }