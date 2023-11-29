import { forwardRef } from 'react';
// iconify
import { Icon, IconifyIcon } from '@iconify/react';
// mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

interface IIconifyProps extends BoxProps {
  icon: IconifyIcon | string;
}

export const Iconify = forwardRef<SVGElement, IIconifyProps>(
  ({ icon, width = 20, sx, ...rest }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...rest}
    />
  )
);

export default Iconify;
