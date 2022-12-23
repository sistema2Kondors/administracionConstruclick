import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { CheckCategoriesComponent } from '../componentes/check-categories/check-categories.component';
import { CheckProviderComponent } from '../componentes/check-provider/check-provider.component';


const routes: Routes = [

  {
    path: 'check-categoria',
    canActivate: [],
    component: CheckCategoriesComponent,
    data: {
        title: 'consultar-categorias',
    } as SBRouteData,
},
{
    path: 'check-proveedor',
    canActivate: [],
    component: CheckProviderComponent,
    data: {
        title: 'consultar-proveedor',
    } as SBRouteData,
},

{
    path: '',
    pathMatch: 'full',
    redirectTo: 'check-categoria',
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquieresRoutingModule { }
