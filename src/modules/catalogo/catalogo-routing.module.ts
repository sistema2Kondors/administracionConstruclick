import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { CatalogoModule } from './catalogo.module';
import * as CatalogoContainers from './containers';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'catalogo',
            breadcrumbs: [
                {
                    text: 'catalogo',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CatalogoContainers.CatalogoComponent,
    },
    {
        path: 'producto',
        data: {
            title: 'Producto',
            breadcrumbs: [
                {
                    text: 'Catalogo',
                    link: '/producto',
                },
                {
                    text: 'Producto',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CatalogoContainers.ProductoComponent,
    },
    {
        path: 'stock-precios',
        data: {
            title: 'stock-precios',
            breadcrumbs: [
                {
                    text: 'stock-precios',
                    link: '/stock-precios',
                },
                {
                    text: 'stock-precios',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CatalogoContainers.StockPreciosComponent,
    },
    {
        path: 'detalles-producto/:id',
        data: {
            title: 'detalles-producto',
            breadcrumbs: [
                {
                    text: 'detalles-producto',
                    link: '/detalles-producto',
                },
                {
                    text: 'detalles-producto',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CatalogoContainers.UpdateProductComponent,
    },
];

@NgModule({
    imports: [CatalogoModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CatalogoRoutingModule {}
