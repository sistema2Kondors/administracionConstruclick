import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as SupportRequestsContainers from './containers';
import { SupportRequestsModule } from './support-requests.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'solicitudes de reporte',
            breadcrumbs: [
                {
                    text: 'solicitudes de reporte',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: SupportRequestsContainers.SupportRequestsComponent,
    },
];

@NgModule({
    imports: [SupportRequestsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SupportRequestsRoutingModule {}
