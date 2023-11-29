import Iconify from '@components/icons';
import { Stack, Typography, useTheme } from '@mui/material';
import { NavLink as MuiNavLink } from 'react-router-dom';

interface INavLinkProps {
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

export const Navlink: React.FC<INavLinkProps> = ({ icon, path, text }) => {
  const theme = useTheme();
  console.log('theme', theme);

  return (
    <MuiNavLink
      to={path}
      style={({ isActive }) => {
        return {
          display: 'block',
          textDecoration: 'none',
          color: 'black',
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
    </MuiNavLink>
  );
};
