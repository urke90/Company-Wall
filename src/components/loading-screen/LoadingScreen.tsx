// @mui
import Box, { BoxProps } from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------

/**
 * A ProLoadingScreen component which acts as a loading indicator.
 * @component
 * @param {MaterialBoxProps} props - The properties that define the ProLoadingScreen component.
 * @example
 * <ProLoadingScreen sx={{color: 'primary.main'}} />
 */
export const LoadingScreen: React.FC<BoxProps> = ({ sx, ...rest }) => {
  const boxStyles = {
    px: 5,
    width: 1,
    flexGrow: 1,
    minHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...sx
  };

  return (
    <Box sx={boxStyles} {...rest}>
      <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
    </Box>
  );
};
