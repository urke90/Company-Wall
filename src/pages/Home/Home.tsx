// mui
import Box from '@mui/material/Box';
import Typogrphy from '@mui/material/Typography';

// ----------------------------------------------------------------

/**
 * Home Component
 *
 * This component serves as the home page of the application. It uses Material-UI components
 * to display a welcome message to the users.
 *
 * The component features a Typography component within a Box component.
 * The Typography is centered and set to variant 'h2' to display a prominent welcome message.
 *
 * @returns {JSX.Element} The Home component with a welcome message.
 */
export const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typogrphy textAlign="center" variant="h2">
        Welcome Dear Customers
      </Typogrphy>
    </Box>
  );
};
