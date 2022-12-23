import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { CheckCategoriesComponent } from './containers/check-categories/check-categories.component';
import { CheckProviderComponent } from './containers/check-provider/check-provider.component';
import { ConsultasComponent } from './containers';
import * as ConsultasContainers from './containers';
import { ConsultasModule } from './consultas.module';


const routes: Routes = [



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
        component: ConsultasContainers.ConsultasComponent,
    },
    {
        path: 'check-categories',
        data: {
            title: 'check-categories',
            breadcrumbs: [
                {
                    text: 'check-categories',
                    link: '/check-categories',
                },
                {
                    text: 'check-categories',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ConsultasContainers.CheckCategoriesComponent,
    },
    {
        path: 'check-provider',
        data: {
            title: 'check-provider',
            breadcrumbs: [
                {
                    text: 'check-provider',
                    link: '/check-provider',
                },
                {
                    text: 'check-provider',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ConsultasContainers.CheckProviderComponent,
    },

{
    path: '',
    pathMatch: 'full',
    redirectTo: '',
}



];

@NgModule({
  imports: [ConsultasModule ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
