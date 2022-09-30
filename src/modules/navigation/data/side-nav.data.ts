import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ANÁLISIS',
        items: ['dashboard', 'estadistica'],
    },
    {
        text: 'INICIO',
        items: ['notifications', 'tienda', 'ordenes', 'historial', 'pagos'],
    },
    {
        text: 'ADMINISTRAR',
        items: ['catalogo', 'informacion'],
    },
    {
        text: 'SOPORTE',
        items: ['solicitudes', 'centro'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    estadistica: {
        icon: 'chart-area',
        text: 'Estadisticas',
        link: '/charts',
    },
    notifications: {
        icon: 'table',
        text: 'Notificaciones',
        link: '/notificaciones',
    },
    tienda: {
        icon: 'table',
        text: 'Mi tienda',
        link: '/tienda',
    },
    ordenes: {
        icon: 'table',
        text: 'Órdenes en curso',
        link: '/ordenes-curso',
    },
    historial: {
        icon: 'table',
        text: 'Historial Órdenes',
        link: '/historial-ordenes',
    },
    pagos: {
        icon: 'table',
        text: 'Pagos',
        link: '/pagos',
    },
    catalogo: {
        icon: 'columns',
        text: 'Catálogo',
        submenu: [
            {
                text: 'Producto',
                link: '/catalogo/producto',
            },
            {
                text: 'Stock-precios',
                link: '/catalogo/stock-precios',
            },
        ],
    },
    informacion: {
        icon: 'table',
        text: 'Información Personal',
        link: '/informacion-personal',
    },
    centro: {
        icon: 'table',
        text: 'Centro de ayuda',
        link: '/tables',
    },
    solicitudes: {
        icon: 'table',
        text: 'Solicitudes de soporte',
        link: '/tables',
    },
};
