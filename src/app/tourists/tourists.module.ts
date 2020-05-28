import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TouristListComponent } from './tourist-list/tourist-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TouristProfileComponent } from './tourist-profile/tourist-profile.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
const routes: Routes = [
    {
        path: 'tourist-list', component: TouristListComponent
    },
    {
        path: 'tourist-profile', component: TouristProfileComponent
    }
];
@NgModule({
    declarations: [
        TouristListComponent,
        TouristProfileComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule,
        RouterModule.forChild(routes)
    ]
})
export class TouristsModule { }
