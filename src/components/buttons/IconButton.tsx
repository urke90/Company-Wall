import MuiButton, { ButtonProps } from '@mui/material/Button';
import { Iconify } from '@components/icons';

// ----------------------------------------------------------------

interface IIconButtonProps extends ButtonProps {
  /** The icon name as a string. */
  icon: string;
  /** Optional width of the icon. */
  iconWidth?: number;
  /** Children elements to be rendered inside the button. */
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
  sx,
  ...rest
}) => {
  return (
    <MuiButton
      startIcon={<Iconify icon={icon} width={iconWidth} />}
      sx={{ width: 1, ...sx }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export const IconRightButton: React.FC<IIconButtonProps> = ({
  icon,
  iconWidth = 20,
  children,
  sx,
  ...rest
}) => {
  return (
    <MuiButton
      endIcon={<Iconify icon={icon} width={iconWidth} />}
      sx={{ width: 1, ...sx }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
