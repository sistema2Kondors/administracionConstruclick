import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as CreateProviderContainers from './containers';
import { CreateProviderModule } from './create-provider.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'crear-provider',
            breadcrumbs: [
                {
                    text: 'crear-provider',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CreateProviderContainers.CreateProviderComponent,
    },
];

@NgModule({
    imports: [CreateProviderModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CreateProviderRoutingModule {}
