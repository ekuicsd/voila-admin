import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GuideListForVerifyComponent } from './guide-list-for-verify/guide-list-for-verify.component';
import { GuideProfileForVerifyComponent } from './guide-profile-for-verify/guide-profile-for-verify.component';

const routes: Routes = [
    {
        path: 'admin', component: GuideListForVerifyComponent
    },
    {
        path: 'verify-profile', component: GuideProfileForVerifyComponent
    }
];

@NgModule({
    declarations: [
        GuideListForVerifyComponent,
        GuideProfileForVerifyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class VerifyGuideModule { }