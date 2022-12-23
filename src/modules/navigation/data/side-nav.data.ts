import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ANÁLISIS',
        items: ['dashboard', 'estadistica'],
    },
    {
        text: 'INICIO',
        items: ['notifications', 'tienda', 'ordenes', 'historial', 'pagos', 'consulta'],
    },
    {
        text: 'ADMINISTRAR',
        items: ['catalogo', 'informacion'],
    },
    {
        text: 'SOPORTE',
        items: ['centro', 'solicitudes'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        img: 'assets/img/iconos-menu/Dashboard.png',
        text: 'Dashboard',
        link: '/dashboard',
    },
    estadistica: {
        img: 'assets/img/iconos-menu/iconoEstadisticas.png',
        text: 'Estadisticas',
        link: '/charts',
    },
    notifications: {
        img: 'assets/img/iconos-menu/iconoNotificaciones.png',
        text: 'Notificaciones',
        link: '/notificaciones',
    },
    tienda: {
        img: 'assets/img/iconos-menu/iconoTienda.png',
        text: 'Mi tienda',
        link: '/tienda',
    },
    ordenes: {
        img: 'assets/img/iconos-menu/iconoOrdenesCurso.png',
        text: 'Órdenes en curso ',
        // link: '/ordenes-curso',
    },
    historial: {
        img: 'assets/img/iconos-menu/iconoHistorialOrdenes.png',
        text: 'Historial Órdenes',
        link: '/historial-ordenes',
    },
    pagos: {
        img: 'assets/img/iconos-menu/iconoPagos.png',
        text: 'Pagos',
        link: '/pagos',
    },
    consulta: {
        img: 'assets/img/iconos-menu/iconoCentroAyuda.png',
        text: 'consulta',
        link: '/consulta',
    },
    catalogo: {
        img: 'assets/img/iconos-menu/iconoCatalogo.png',
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
        img: 'assets/img/iconos-menu/iconoInformacionPersonal.png',
        text: 'Información Personal',
        link: '/informacion-personal',
    },
    centro: {
        img: 'assets/img/iconos-menu/iconoCentroAyuda.png',
        text: 'Centro de ayuda',
        link: '/centro-ayuda',
    },
    solicitudes: {
        img: 'assets/img/iconos-menu/iconoSolicitudSoporte.png',
        text: 'Solicitudes de soporte',
        link: '/solicitudes-soporte',
    },
};
