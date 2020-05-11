import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GuideListComponent } from './guide-list/guide-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GuideProfileComponent } from './guide-profile/guide-profile.component';

const routes : Routes = [
    {
        path: 'guide-list', component: GuideListComponent
    },
    {
        path: 'guide-profile', component: GuideProfileComponent
    }
];

@NgModule({
    declarations: [
        GuideListComponent,
        GuideProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GuideModule { }