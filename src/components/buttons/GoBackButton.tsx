// react router
import { useNavigate } from 'react-router-dom';
// mui
import { ButtonProps } from '@mui/material/Button';
// components
import { IconLeftButton, ICON_NAMES } from '@/components';

// ----------------------------------------------------------------

/**
 * GoBackButton Component
 *
 * This component renders a button with an icon on the left, primarily used for navigation purposes.
 * When clicked, it navigates the user to the previous page in the history stack.
 *
 * Props:
 * @param {IGoBackButtonProps} props - The props for the GoBackButton component.
 *   @param {React.ReactNode} [children] - Optional. The children elements to be rendered inside the button.
 *       If not provided, defaults to the text 'Go Back'.
 *
 * Usage:
 * <GoBackButton>Custom Text</GoBackButton>
 *
 * The `children` prop allows customizing the text or elements displayed within the button.
 * If `children` is not provided, the button defaults to displaying 'Go Back'.
 *
 * The component utilizes the `IconLeftButton` for rendering the button with an icon, and the `useNavigate` hook
 * from React Router for handling the navigation.
 */
export const GoBackButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const navigate = useNavigate();

  const handleRedirectBack = () => {
    navigate(-1);
  };

  return (
    <IconLeftButton
      icon={ICON_NAMES.back}
      onClick={handleRedirectBack}
      {...rest}
    >
      {children ? children : 'Go Back'}
    </IconLeftButton>
  );
};
