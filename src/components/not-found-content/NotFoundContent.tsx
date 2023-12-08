// mui
import Box, { BoxProps } from '@mui/material/Box';
// components
import { GoBackButton } from '../buttons';

// ----------------------------------------------------------------

interface INotFoundContent extends BoxProps {
  /**
   * Optional. Node to be rendered as the Go Back link. If provided, it will be displayed.
   * If not provided or set to true, a default Go Back button will be displayed.
   */
  goBackLink?: React.ReactNode;
}

/**
 * NotFoundContent Component
 *
 * This component renders a basic card layout for displaying not found (404) content.
 * It includes a customizable title and children elements, along with a Go Back button for navigation.
 *
 * Props:
 * @param {INotFoundContent} props - The props for the NotFoundContent component.
 *   @param {React.ReactNode} children - The content to be displayed within the card.
 *   @param {string} title - The title to be displayed on the card.
 *
 * Usage:
 * <NotFoundContent title="Page Not Found">Custom message or elements here</NotFoundContent>
 *
 * The component uses the `BasicCard` for the card layout and the `GoBackButton` for navigation.
 */
export const NotFoundContent: React.FC<INotFoundContent> = ({
  children,
  goBackLink = true,
  ...rest
}) => {
  return (
    <Box {...rest}>
      {children}
      {goBackLink && (
        <Box
          sx={{
            mt: 4,
            mx: 'auto',
            width: { sx: 1, sm: '50%' }
          }}
        >
          <GoBackButton />
        </Box>
      )}
    </Box>
  );
};
