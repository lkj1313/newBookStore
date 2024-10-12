import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login/Login";
import Cart from "../pages/cart/Cart";
import Delivery from "../pages/delivery/Delivery";

import SearchResultsPage from "../pages/searchResultsPage/SearchResultsPage";
import Layout from "../shared/ui/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
