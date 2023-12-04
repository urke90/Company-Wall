// react router
import { useParams } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';

// ----------------------------------------------------------------

export const RolesEdit: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>();

  console.log('roleId', roleId);

  return <Box>RolesEdit page</Box>;
};
