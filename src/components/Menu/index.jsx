import React from "react";
import { Container } from "./styles";

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
        <h3>
          Check our <Link to="/menu">Menu</Link>{" "}
        </h3>
      </div>
    </Container>
  );
};
