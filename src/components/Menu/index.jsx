import React from "react";
import { Container, Content } from "./styles";

import { Link } from "react-router-dom";
import { Card } from "../Card/Cards";

export const Menu = () => {
  return (
    <Container id="menu">
      <div className="text-mid">
        <h3>Offers</h3>
      </div>

      {/* <PizzaCard /> */}
      <div>
        <Card />
      </div>

      <div>
        <h3 className="text-mid">
          Check our{" "}
          <Link className="menu-btn-home" to="/menu">
            Menu
          </Link>{" "}
        </h3>
      </div>
    </Container>
  );
};
