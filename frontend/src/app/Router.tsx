import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Cart from "../pages/cart/Cart";
import Delivery from "../pages/delivery/Delivery";

import SearchResultsPage from "../pages/searchResultsPage/SearchResultsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/search/:query" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
