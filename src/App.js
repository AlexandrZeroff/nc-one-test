import './App.scss';
import AppHeader from './components/appHeader.jsx/AppHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcc26',
      contrastText: '#fbfbfb',
    },
    secondary: {
      main: '#414141',
    },
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Anek Telugu',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 96,
    },
    h2: {
      fontFamily: 'Anek Telugu',
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 48,
      letterSpacing: '0.05rem',
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 30,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
    </ThemeProvider>

  );
}

export default App;
