import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import GoodsList from './components/goodsList/GoodsList'
import ProductPage from './components/productPage/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import { theme } from './theme';


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

export default App
