import React, { useCallback, useState } from "react";
import { HeaderStyles, MobileMenu, Menu } from "./styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logoPizza.png";
import { useStateContext } from "../../context/StateContext";

import { Badge } from "@mui/material";

export const Header = () => {
  const { qty } = useStateContext();

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
          <Badge
            onClick={handleOpenMenuMobile}
            badgeContent={qty}
            color="primary"
          >
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </Menu>
      </nav>
    </HeaderStyles>
  );
};
