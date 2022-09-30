import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as tiendaContainers from './containers';
import { TiendaModule } from './tienda.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'tienda - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Tienda',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: tiendaContainers.TiendaComponent,
    },
];

@NgModule({
    imports: [TiendaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TiendaRoutingModule {}
