import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { MenuPage } from "./pages/MenuPage";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { useLayoutEffect } from "react";

const AppRoutes = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
