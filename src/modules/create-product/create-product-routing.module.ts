import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import * as CreateProductContainers from './containers';
import { CreateProductModule } from './create-product.module';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'crear-producto',
            breadcrumbs: [
                {
                    text: 'crear-producto',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CreateProductContainers.CreateProductComponent,
    },
];

@NgModule({
    imports: [CreateProductModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CreateProductRoutingModule {}
