import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as ordersHistoryContainers from './containers';
import { OrdersHistoryModule } from './order-history.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'historial de ordenes - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Historial de órdenes',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ordersHistoryContainers.OrderHistoryComponent,
    },
];

@NgModule({
    imports: [OrdersHistoryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class OrderHistoryRoutingModule {}
