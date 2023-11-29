import {
  createTheme,
  ThemeProvider as MuiThemeProvide,
  CssBaseline
} from '@mui/material';

interface IThemeProvider {
  children: React.ReactNode;
}

const theme = createTheme({});

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <MuiThemeProvide theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvide>
  );
};

export default ThemeProvider;
