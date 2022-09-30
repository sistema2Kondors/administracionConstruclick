import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { AssistedCreationModule } from './assisted-creation.module';
import * as AssistedCreationContainers from './containers';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'creación asistida',
            breadcrumbs: [
                {
                    text: 'creacion asistida',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: AssistedCreationContainers.AssistedCreationComponent,
    },
];

@NgModule({
    imports: [AssistedCreationModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AssistedCreationRoutingModule {}
