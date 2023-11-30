import { useState } from 'react';
// mui
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Navlink } from '@components/links';
import { NAV_CONFIG } from '@config/navigation';
import { Iconify, ICON_NAMES } from '@components/icons';

// ----------------------------------------------------------------

export const Header: React.FC = () => {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorMenuEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Company Wall
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Iconify
                icon={ICON_NAMES.menu}
                width={40}
                sx={{ color: (theme) => theme.palette.common.white }}
              />
            </IconButton>
            <Menu
              sx={{ mt: '45px', p: 0 }}
              id="menu-appbar"
              anchorEl={anchorMenuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorMenuEl)}
              onClose={handleCloseUserMenu}
            >
              {NAV_CONFIG.map(({ icon, path, text }) => (
                <MenuItem
                  key={path}
                  onClick={handleCloseUserMenu}
                  sx={{ p: 0 }}
                >
                  <Navlink icon={icon} path={path} text={text} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
