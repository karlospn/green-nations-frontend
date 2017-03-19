import { MenuItem } from '../fw/models/MenuItem';

export let menuItemsConfig: Array<MenuItem> =
[
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/dashboard',
        subMenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: '/countries',
        subMenu: null
    },
    {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: '/settings',
        subMenu: null
    }
]