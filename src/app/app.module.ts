import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './account/login-page/login-page.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FullComponentComponent } from './layouts/full-component/full-component.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    FullComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PerfectScrollbarModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
