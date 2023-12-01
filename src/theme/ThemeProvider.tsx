// mui
import {
  createTheme,
  ThemeProvider as MuiThemeProvide,
  CssBaseline
} from '@mui/material';

// ----------------------------------------------------------------

interface IThemeProvider {
  /**
   * `children` - React child nodes that will inherit the theme.
   */
  children: React.ReactNode;
}

/**
 * Default theme configuration for Material-UI.
 */
const theme = createTheme({});

/**
 * Custom ThemeProvider component.
 * This component wraps its children with Material-UI's ThemeProvider and CssBaseline
 * to provide a consistent theme and baseline styles across the application.
 *
 * @param {IThemeProvider} props - Props for ThemeProvider.
 * @returns {JSX.Element} A ThemeProvider wrapping children with a theme.
 */
export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <MuiThemeProvide theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvide>
  );
};
