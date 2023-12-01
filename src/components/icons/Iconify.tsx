import { forwardRef } from 'react';
// iconify
import { Icon, IconifyIcon } from '@iconify/react';
// mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

interface IIconifyProps extends BoxProps {
  /**
   * `icon` - The Iconify icon to be displayed.
   * Can be an object from the IconifyIcon interface or a string representing the icon name.
   */
  icon: IconifyIcon | string;
}

/**
 * Iconify component.
 * This component renders an Iconify icon within a Material-UI Box component.
 * It allows for custom sizing and additional styling through BoxProps.
 *
 * @param {IIconifyProps} props - Props for Iconify component.
 * @param {SVGElement} ref - Ref forwarded to the Box component.
 * @returns {JSX.Element} A Box component rendering the specified Iconify icon.
 */
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
