import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { DropdownModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FullComponentComponent } from './layouts/full-component/full-component.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { IconsModule } from 'angular-bootstrap-md';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AccountModule } from './account/account.module';
import { DealsModule } from './deals/deals.module';
import { GuideModule } from './guide/guide.module';
import { PersonalTourModule } from './personal-tour/personal-tour.module';
import { TouristsModule } from './tourists/tourists.module';
import { VerifyGuideModule } from './verify-guide/verify-guide.module';
import {MatSidenavModule,MatButtonModule,MatToolbarModule,MatButtonToggleModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { SidenavbarComponent } from './layouts/sidenavbar/sidenavbar.component';


const material = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule
];
@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    FullComponentComponent,
    SidenavbarComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule,
    NgbModule,
    PerfectScrollbarModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    DropdownModule.forRoot(),
    AccountModule,
    DealsModule,
    GuideModule,
    PersonalTourModule,
    MatSidenavModule,
    MatButtonModule,MatToolbarModule,MatButtonToggleModule,
    TouristsModule,
    VerifyGuideModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
