import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TourListComponent } from './tour-list/tour-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonalTourProfileComponent } from './personal-tour-profile/personal-tour-profile.component';

const routes: Routes = [
    {
        path: 'tour-list', component: TourListComponent
    },
    {
        path: 'personal-tour-profile', component: PersonalTourProfileComponent
    }
];

@NgModule({
    declarations: [
        TourListComponent,
        PersonalTourProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class PersonalTourModule { }