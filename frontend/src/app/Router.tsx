import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Delivery from "../pages/Delivery";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
