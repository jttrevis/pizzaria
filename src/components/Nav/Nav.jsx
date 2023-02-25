import { Link as Scroll } from "react-scroll";
import { Navbar } from "./NavStyles";

import pizzaLogo from "../../assets/logos/pizza.svg";
import friesLogo from "../../assets/logos/fries.svg";
import drinkLogo from "../../assets/logos/soda.png";

export const Nav = () => {
  return (
    <Navbar>
      <Scroll spy={true} smooth={true} duration={600} to="pizzas">
        <img src={pizzaLogo} alt="" />
      </Scroll>
      <Scroll spy={true} smooth={true} duration={600} to="sides">
        <img src={friesLogo} alt="" />
      </Scroll>
      <Scroll spy={true} smooth={true} duration={600} to="drinks">
        <img src={drinkLogo} alt="" />
      </Scroll>
    </Navbar>
  );
};
