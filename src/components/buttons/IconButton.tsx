// mui
import Button, { ButtonProps } from '@mui/material/Button';
// components
import { Iconify } from '@/components';

// ----------------------------------------------------------------

interface IIconButtonProps extends ButtonProps {
  /**
   * The icon name as a string.
   */
  icon: string;
  /**
   * Optional width of the icon.
   */
  iconWidth?: number;
  /**
   * Children elements to be rendered inside the button.
   */
  children: React.ReactNode;
}

/**
 * Component for rendering a button with an icon on the left.
 *
 * @param {IIconButtonProps} props - The properties of the IconLeftButton.
 * @returns {JSX.Element} The IconLeftButton component.
 */
export const IconLeftButton: React.FC<IIconButtonProps> = ({
  icon,
  iconWidth = 20,
  children,
  variant = 'contained',
  sx,
  ...rest
}) => {
  return (
    <Button
      startIcon={<Iconify icon={icon} width={iconWidth} />}
      sx={{ width: 1, ...sx }}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
};

/**
 * Component for rendering a button with an icon on the right.
 *
 * @param {IIconButtonProps} props - The properties of the IconRightButton.
 * @returns {JSX.Element} The IconRightButton component.
 */
export const IconRightButton: React.FC<IIconButtonProps> = ({
  icon,
  iconWidth = 20,
  children,
  variant = 'contained',
  sx,
  ...rest
}) => {
  return (
    <Button
      endIcon={<Iconify icon={icon} width={iconWidth} />}
      sx={{ width: 1, ...sx }}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
};
