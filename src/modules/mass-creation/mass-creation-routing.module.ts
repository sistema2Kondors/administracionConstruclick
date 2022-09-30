import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as MassCreationContainers from './containers';
import { MassCreationModule } from './mass-creation.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'creación masiva',
            breadcrumbs: [
                {
                    text: 'creacion masiva',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: MassCreationContainers.MassCreationComponent,
    },
];

@NgModule({
    imports: [MassCreationModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MassCreationRoutingModule {}
