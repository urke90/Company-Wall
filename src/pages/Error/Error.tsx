// react router
import { Link } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// config
import { LINK_CONFIG } from '@config/navigation';
// components
import { BasicCard } from '@components/cards';
import { IconLeftButton } from '@components/buttons';

// ----------------------------------------------------------------

/**
 * `Error` is a functional React component that renders an error page.
 * It displays a message 'Page Not Found!' inside a BasicCard component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const Error: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 10
      }}
    >
      <BasicCard
        title="Error!"
        raised
        cardActions={<CardActions />}
        sx={{ p: 1 }}
      >
        <Typography variant="h5" textAlign="center">
          Page Not Found!
        </Typography>
      </BasicCard>
    </Box>
  );
};

/**
 * `CardActions` is a functional component that renders a list of links.
 * Each link is represented as an `IconLeftButton` with attributes from `LINK_CONFIG`.
 *
 * @returns {JSX.Element} The rendered stack of link buttons.
 */
const CardActions = () => {
  return (
    <Stack
      spacing={1}
      useFlexGap
      flexWrap="wrap"
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ flex: 1 }}
    >
      {LINK_CONFIG.map(({ icon, path, text }) => (
        <Link key={path} to={path} style={{ textDecoration: 'none' }}>
          <IconLeftButton icon={icon}>{text}</IconLeftButton>
        </Link>
      ))}
    </Stack>
  );
};
