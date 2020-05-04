import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

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
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AccountModule } from './account/account.module';
import { DealsModule } from './deals/deals.module';
import { GuideModule } from './guide/guide.module';
import { PersonalTourModule } from './personal-tour/personal-tour.module';
import { TouristsModule } from './tourists/tourists.module';
import { VerifyGuideModule } from './verify-guide/verify-guide.module';


@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    AccountModule,
    DealsModule,
    GuideModule,
    PersonalTourModule,
    TouristsModule,
    VerifyGuideModule

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
