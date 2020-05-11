import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
=======
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
>>>>>>> bbdf8aaef005be41e75933f1082d94d2e9d62f65
@NgModule({
    declarations: [
        LoginPageComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
    ],
    imports: [
        CommonModule,
<<<<<<< HEAD
        MDBBootstrapModule
    ],
    exports:[
LoginPageComponent

=======
        RouterModule.forChild(routes)
>>>>>>> bbdf8aaef005be41e75933f1082d94d2e9d62f65
    ]
})
export class AccountModule { }