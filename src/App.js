import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoodsList from './components/goodsList/GoodsList'
import ProductPage from './components/productPage/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';

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
      fontWeight: 500,
      fontSize: 32,
      lineHeight: '48px',
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
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<GoodsList />} />
            <Route path='/:id' element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>

    </ThemeProvider>

  );
}

export default App;
