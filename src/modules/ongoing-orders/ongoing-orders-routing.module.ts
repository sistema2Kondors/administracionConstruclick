import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as OngoingOrdersContainers from './containers';
import { OngoingOrdersModule } from './ongoing-orders.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'ordenes en curso - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Órdenes en curso',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: OngoingOrdersContainers.OngoingOrdersComponent,
    },
];

@NgModule({
    imports: [OngoingOrdersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class OngoingOrdersRoutingModule {}
