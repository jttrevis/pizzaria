import React, { useCallback, useState, useContext } from "react";
import { HeaderStyles, MobileMenu, Menu } from "./styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logoPizza.png";

import { Badge } from "@mui/material";
import { CartContext } from "./../../context/CartContex";

export const Header = () => {
  const { totalItems } = useContext(CartContext);

  const [menuMobile, setMenuMobile] = useState(false);

  const handleOpenMenuMobile = useCallback(() => {
    setMenuMobile(!menuMobile);
  }, [menuMobile]);
  return (
    <HeaderStyles>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <Badge badgeContent={totalItems} color="primary">
          <Link to="/cart">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Link>
        </Badge>
        <MobileMenu htmlFor="menu-toggle" onClick={handleOpenMenuMobile}>
          <p>Menu</p>
          <span></span>
        </MobileMenu>

        <Menu id="menu-toggle" isOpen={menuMobile}>
          <li>
            <Link onClick={handleOpenMenuMobile} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleOpenMenuMobile} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link onClick={handleOpenMenuMobile} to="/contact">
              Contact
            </Link>
          </li>
        </Menu>
      </nav>
    </HeaderStyles>
  );
};
