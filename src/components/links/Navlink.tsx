// mui
import { Stack, Typography, useTheme } from '@mui/material';
// react router
import { NavLink as RouterNavLink } from 'react-router-dom';
// components
import { Iconify } from '@/components';

// ----------------------------------------------------------------------

interface INavLinkProps {
  /**
   * text to be displayed for nav items
   */
  text: string;
  /**
   * path (url) to the page
   */
  path: string;
  /**
   * icon to display on button
   */
  icon: string;
}

/**
 * NavLink Component
 *
 * This component creates a navigation link using Material-UI and react-router-dom.
 * It displays an icon and a text in a flexible box layout.
 *
 * The NavLink changes its background color when it is active.
 *
 * @param {INavLinkProps} props - The properties passed to the component.
 * @returns {JSX.Element} A rendered navigation link element.
 */
export const Navlink: React.FC<INavLinkProps> = ({ icon, path, text }) => {
  const theme = useTheme();

  return (
    <RouterNavLink
      to={path}
      style={({ isActive }) => {
        return {
          display: 'block',
          textDecoration: 'none',
          color: theme.palette.common.black,
          backgroundColor: isActive ? theme.palette.grey[400] : '',
          padding: '6px 16px '
        };
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Iconify icon={icon} sx={{ mr: 1 }} />
        <Typography>{text}</Typography>
      </Stack>
    </RouterNavLink>
  );
};
