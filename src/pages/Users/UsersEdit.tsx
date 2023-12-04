// react router
import { useParams } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';

// ----------------------------------------------------------------

export const UsersEdit: React.FC = () => {
  const editParams = useParams();
  console.log('editParams', editParams);
  return <Box>UsersEdit Page</Box>;
};
