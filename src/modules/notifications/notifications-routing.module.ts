import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as notificationsContainers from './containers';
import { NotificationsModule } from './notifications.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'notificaciones - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Notificaciones',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: notificationsContainers.NotificationsComponent,
    },
];

@NgModule({
    imports: [NotificationsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class NotificationsRoutingModule {}
