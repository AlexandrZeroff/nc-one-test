import ProductList from "../components/ProductList/ProductList";
import ProductPage from "../components/ProductPage/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductList />} />
          <Route path="/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
