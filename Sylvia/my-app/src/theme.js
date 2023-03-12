import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#D46A6A',
      light: '#61dafb',
      dark: '#801515',
    },
    secondary: {
      main: '#ECAAD3',
      light: '#61dafb',
      dark: '#8D3D6F',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFCDF',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;