// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { ICON_NAMES, LinkIconLeftButton, NotFoundContent } from '@/components';

// ----------------------------------------------------------------

/**
 * Interface for the properties of the DataNotFound component.
 */
interface IDataNotFound {
  /**
   * Title to be displayed in the Typography component, usually indicating the type of data not found.
   */
  title: string;

  /**
   * Title for the link button, indicating where it will redirect.
   */
  linkTitle: string;

  /**
   * The URL path to which the link button will navigate.
   */
  linkTo: string;
}

/**
 * DataNotFound Component
 *
 * This component is used to display a customizable message for when specific data is not found.
 * It leverages the NotFoundContent component for consistent styling and structure.
 *
 * Props:
 * @param {IDataNotFound} props - The props for the DataNotFound component.
 *   @param {string} title - The message to be displayed, indicating the missing data context.
 *   @param {string} linkTitle - The text for the link button.
 *   @param {string} linkTo - The navigation path for the link button.
 *
 * Usage:
 * <DataNotFound title="Item Not Found" linkTitle="Go to Items" linkTo="/items" />
 *
 * This component is ideal for cases where you need to inform users about missing or unavailable data,
 * and provide them with a navigation option to a relevant page.
 */
export const DataNotFound: React.FC<IDataNotFound> = ({
  linkTitle,
  linkTo,
  title
}) => {
  return (
    <NotFoundContent goBackLink={false}>
      <Typography variant="h5" textAlign="center">
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 'auto',
          mt: 3,
          width: { sm: '50%' }
        }}
      >
        <LinkIconLeftButton icon={ICON_NAMES.back} to={linkTo}>
          {linkTitle}
        </LinkIconLeftButton>
      </Box>
    </NotFoundContent>
  );
};
