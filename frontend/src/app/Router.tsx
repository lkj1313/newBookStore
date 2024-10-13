import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login/Login";
import Cart from "../pages/cart/Cart";
import Delivery from "../pages/delivery/Delivery";

import Layout from "../shared/ui/layout/Layout";
import SearchResultsPage from "../pages/searchResults/SearchResultsPage";
import BookDetailPage from "../pages/bookDetail/BookDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/searchResult/:query" element={<SearchResultsPage />} />
          <Route path="/bookDetail/:isbn" element={<BookDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
