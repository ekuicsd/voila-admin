import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealProfileComponent } from './deal-profile/deal-profile.component';

const routes: Routes = [
    {
        path: 'deal-list', component: DealsListComponent
    },
    {
        path: 'deal-profile', component: DealProfileComponent
    }
];

@NgModule({
    declarations: [
        DealsListComponent,
        DealProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class DealsModule { }