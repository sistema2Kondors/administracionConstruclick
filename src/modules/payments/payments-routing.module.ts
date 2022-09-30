import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as paymentsContainers from './containers';
import { PaymentsModule } from './payments.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'payments - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Pagos',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: paymentsContainers.PaymentsComponent,
    },
];

@NgModule({
    imports: [PaymentsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PaymentsRoutingModule {}
