// components
import { ICON_NAMES } from '@/components';

// ----------------------------------------------------------------

/**
 * Fake delay of 3000 ms (3 seconds) to use in timeout since updete/create actions last 2000ms (2 seconds).
 */
export const FAKE_NAVIGATE_DELAY = 3000;

export interface INavConfig {
  /**
   * text to be displayed for nav items
   */
  text: string;
  /**
   * path(url) to the page
   */
  path: string;
  /**
   * icon to display on button
   */
  icon: string;
}

export const NAV_LINK_CONFIG: INavConfig[] = [
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

export const LINK_CONFIG: INavConfig[] = [
  {
    text: 'Home',
    path: '/',
    icon: ICON_NAMES.home
  },
  {
    text: 'Users',
    path: '/users',
    icon: ICON_NAMES.users
  },
  {
    text: 'Roles',
    path: '/roles',
    icon: ICON_NAMES.roles
  }
];
