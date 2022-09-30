import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
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
                m => m.NotificationsRoutingModule
            ),
    },
    {
        path: 'tienda',
        loadChildren: () =>
            import('modules/tienda/tienda-routing.module').then(m => m.TiendaRoutingModule),
    },
    {
        path: 'ordenes-curso',
        loadChildren: () =>
            import('modules/ongoing-orders/ongoing-orders-routing.module').then(
                m => m.OngoingOrdersRoutingModule
            ),
    },
    {
        path: 'historial-ordenes',
        loadChildren: () =>
            import('modules/order-history/order-history-routing.module').then(
                m => m.OrderHistoryRoutingModule
            ),
    },
    {
        path: 'pagos',
        loadChildren: () =>
            import('modules/payments/payments-routing.module').then(m => m.PaymentsRoutingModule),
    },
    {
        path: 'catalogo',
        loadChildren: () =>
            import('modules/catalogo/catalogo-routing.module').then(m => m.CatalogoRoutingModule),
    },
    {
        path: 'informacion-personal',
        loadChildren: () =>
            import('modules/personal-information/personal-information-routing.module').then(
                m => m.PersonalInformationRoutingModule
            ),
    },
    {
        path: 'creacion-asistida',
        loadChildren: () =>
            import('modules/assisted-creation/assisted-creation-routing.module').then(
                m => m.AssistedCreationRoutingModule
            ),
    },
    {
        path: 'creacion-masiva',
        loadChildren: () =>
            import('modules/mass-creation/mass-creation-routing.module').then(
                m => m.MassCreationRoutingModule
            ),
    },
    {
        path: 'centro-ayuda',
        loadChildren: () =>
            import('modules/help-center/help-center-routing.module').then(
                m => m.HelpCenterRoutingModule
            ),
    },
    {
        path: 'solicitudes-soporte',
        loadChildren: () =>
            import('modules/support-requests/support-requests-routing.module').then(
                m => m.SupportRequestsRoutingModule
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
