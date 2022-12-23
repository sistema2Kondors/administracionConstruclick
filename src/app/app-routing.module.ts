import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './guards/auth-login/check-auth.guard';
import { CheckLoginGuard } from './guards/login-guard/check-login.guard';

const routes: Routes = [

    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
             canActivate:[],
    },

    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule ),
                canActivate:[CheckLoginGuard],
    },


    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
             canActivate:[CheckLoginGuard],
    },


    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: 'notificaciones',
        loadChildren: () =>
            import('modules/notifications/notifications-routing.module').then(
                m => m.NotificationsRoutingModule  ),
            canActivate:[CheckLoginGuard],
                
    },
    {
        path: 'tienda',
        loadChildren: () =>
            import('modules/tienda/tienda-routing.module').then(m => m.TiendaRoutingModule),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'ordenes-curso',
        loadChildren: () =>
            import('modules/ongoing-orders/ongoing-orders-routing.module').then(
                m => m.OngoingOrdersRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'historial-ordenes',
        loadChildren: () =>
            import('modules/order-history/order-history-routing.module').then(
                m => m.OrderHistoryRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'pagos',
        loadChildren: () =>
            import('modules/payments/payments-routing.module').then(m => m.PaymentsRoutingModule),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'catalogo',
        loadChildren: () =>
            import('modules/catalogo/catalogo-routing.module').then(m => m.CatalogoRoutingModule),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'informacion-personal',
        loadChildren: () =>
            import('modules/personal-information/personal-information-routing.module').then(
                m => m.PersonalInformationRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'creacion-asistida',
        loadChildren: () =>
            import('modules/assisted-creation/assisted-creation-routing.module').then(
                m => m.AssistedCreationRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'creacion-masiva',
        loadChildren: () =>
            import('modules/mass-creation/mass-creation-routing.module').then(
                m => m.MassCreationRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'centro-ayuda',
        loadChildren: () =>
            import('modules/help-center/help-center-routing.module').then(
                m => m.HelpCenterRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'solicitudes-soporte',
        loadChildren: () =>
            import('modules/support-requests/support-requests-routing.module').then(
                m => m.SupportRequestsRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },
    {
        path: 'crear-producto',
        loadChildren: () =>
            import('modules/create-product/create-product-routing.module').then(
                m => m.CreateProductRoutingModule
            ),
            canActivate:[CheckLoginGuard],
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
       
    },

    {
        path: 'crear-provider',
        loadChildren: () =>
            import('modules/create-provider/create-provider-routing.module').then(
                m => m.CreateProviderRoutingModule
            ),
    },
    {
        path: '',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(
                m => m.AuthRoutingModule
            ),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },

  
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
