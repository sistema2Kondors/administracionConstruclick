import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ANÁLISIS',
        items: ['dashboard', 'estadistica'],
    },
    {
        text: 'INICIO',
        items: ['notificaciones', 'tienda', 'ordenes', 'historial', 'pagos'],
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
    notificaciones: {
        icon: 'table',
        text: 'Notificaciones',
        link: '/notificaciones',
    },
    tienda: {
        icon: 'table',
        text: 'Mi tienda',
        link: '/dashboard',
    },
    ordenes: {
        icon: 'table',
        text: 'Órdenes en curso',
        link: '/dashboard',
    },
    historial: {
        icon: 'table',
        text: 'Historial Órdenes',
        link: '/dashboard',
    },
    pagos: {
        icon: 'table',
        text: 'Pagos',
        link: '/dashboard',
    },
    catalogo: {
        icon: 'table',
        text: 'Catálogo',
        link: '/tables',
    },
    informacion: {
        icon: 'table',
        text: 'Información Personal',
        link: '/tables',
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
