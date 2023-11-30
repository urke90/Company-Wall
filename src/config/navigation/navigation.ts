import { ICON_NAMES } from '@components/icons';

export interface INavConfig {
  /** text to be displayed for nav items */
  text: string;
  /** path(url) to the page */
  path: string;
  /** icon to display on button */
  icon: string;
}

export const NAV_CONFIG: INavConfig[] = [
  {
    text: 'Home',
    path: '/',
    icon: ICON_NAMES.home
  },
  {
    text: 'Users',
    path: 'users',
    icon: ICON_NAMES.users
  },
  {
    text: 'Roles',
    path: 'roles',
    icon: ICON_NAMES.roles
  }
];
