import { MenuItem } from './menuItem';
export class RoutingGlobalConst {

    public static readonly menuItems: { [id: string]: MenuItem; } = {
        'DASHBOARD': { label: 'Dashboard', link: '/' },
        'SETTINGS': { label: 'Settings', link: '/settings' }
    };

}
