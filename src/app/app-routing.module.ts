import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponentComponent } from './layouts/full-component/full-component.component';

const routes: Routes = [
  {
    path: '', component: FullComponentComponent, children: [
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
