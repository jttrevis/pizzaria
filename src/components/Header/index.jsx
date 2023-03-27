import React, { useCallback, useState, useContext } from "react";
import { HeaderStyles, MobileMenu, Menu } from "./styles";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { CartContext } from "./../../context/CartContex";
import logo from "../../assets/logos/logoPizza.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";

export const Header = () => {
  const { totalItems } = useContext(CartContext);
  const [menuMobile, setMenuMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleOpenMenuMobile = useCallback(() => {
    setMenuMobile(!menuMobile);
  }, [menuMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? "black" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  const menuMobileStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const menuStyle = {
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <HeaderStyles style={navbarStyle}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <MobileMenu
          style={menuMobileStyle}
          htmlFor="menu-toggle"
          onClick={handleOpenMenuMobile}
        >
          <p>Menu</p>
          <span></span>
        </MobileMenu>

        <Menu id="menu-toggle" isOpen={menuMobile} style={menuStyle}>
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
          <Link to="/cart">
            <Badge
              badgeContent={totalItems}
              color="primary"
              onClick={handleOpenMenuMobile}
            >
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Menu>
      </nav>
    </HeaderStyles>
  );
};
