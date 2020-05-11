import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponentComponent } from './layouts/full-component/full-component.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BlankPageComponent } from './layouts/blank-page/blank-page.component';
import { LoginPageComponent } from './account/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: FullComponentComponent, children: [
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },

      {
        path: 'verify', redirectTo: '/verify-guide/admin', pathMatch: 'full'
      },
      {
        path: 'verify-guide', 
        loadChildren: () => import('../app/verify-guide/verify-guide.module').then(module => module.VerifyGuideModule)
      },

      {
        path: 'guides', redirectTo: '/all-guides/guide-list', pathMatch: 'full'
      },
      {
        path: 'all-guides', 
        loadChildren: () => import('../app/guide/guide.module').then(module => module.GuideModule)
      },

      {
        path: 'tourists', redirectTo: '/all-tourists/tourist-list', pathMatch: 'full'
      },
      {
        path: 'all-tourists', 
        loadChildren: () => import('../app/tourists/tourists.module').then(module => module.TouristsModule)
      },

      {
        path: 'deals', redirectTo: '/all-deals/deal-list', pathMatch: 'full'
      },
      {
        path: 'all-deals', 
        loadChildren: () => import('../app/deals/deals.module').then(module => module.DealsModule)
      },

      {
        path: 'tours', redirectTo: '/all-tours/tour-list', pathMatch: 'full'
      },
      {
        path: 'all-tours', 
        loadChildren: () => import('../app/personal-tour/personal-tour.module').then(module => module.PersonalTourModule)
      },

      ///////////////////////////////

      {
        path: 'verify-profile', redirectTo: '/a/verify-profile', pathMatch: 'full'
      },
      {
        path: 'a', 
        loadChildren: () => import('../app/verify-guide/verify-guide.module').then(module => module.VerifyGuideModule)
      },
      {
        path: 'guide-profile', redirectTo: '/b/guide-profile', pathMatch: 'full'
      },
      {
        path: 'b', 
        loadChildren: () => import('../app/guide/guide.module').then(module => module.GuideModule)
      },
      {
        path: 'personal-tour-profile', redirectTo: '/c/personal-tour-profile', pathMatch: 'full'
      },
      {
        path: 'c', 
        loadChildren: () => import('../app/personal-tour/personal-tour.module').then(module => module.PersonalTourModule)
      },
      {
        path: 'deal-profile', redirectTo: '/d/deal-profile', pathMatch: 'full'
      },
      {
        path: 'd', 
        loadChildren: () => import('../app/deals/deals.module').then(module => module.DealsModule)
      },
      {
        path: 'tourist-profile', redirectTo: '/e/tourist-profile', pathMatch: 'full'
      },
      {
        path: 'e', 
        loadChildren: () => import('../app/tourists/tourists.module').then(module => module.TouristsModule)
      },

      //////////////////////////////
      {
        path: 'login', redirectTo: '/account/login', pathMatch: 'full'
      },
      {
        path: 'change-password', redirectTo: 'account/change-password', pathMatch: 'full'
      },
      {
        path: 'forgot-password', redirectTo: 'account/forgot-password', pathMatch: 'full'
      },
      {
        path: 'account', 
        loadChildren: () => import('../app/account/account.module').then(module => module.AccountModule)
      },



    ],
    // canActivate: [AuthGuardService]
  },
  // {
  //   path: '', component: BlankPageComponent, children: [
  //     {
  //       path: '', redirectTo: '/account/login', pathMatch: 'full'
  //     },
  //     {
  //       path: 'account', 
  //       loadChildren: () => import('../app/account/account.module').then(module => module.AccountModule)
  //     }
  //   ] 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
