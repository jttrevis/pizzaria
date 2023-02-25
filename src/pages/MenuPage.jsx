import React from "react";

import { Toaster } from "react-hot-toast";
import { Content, Container } from "./Menu.style";

import { Nav } from "../components/Nav/Nav";
import { SidesCards } from "../components/Card/SidesCards";
import { PizzasCard } from "./../components/Card/PizzasCards";
import { DrinksCard } from "./../components/Card/DrinksCards";

export const MenuPage = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Container>
        <Content id="pizzas">
          <h1>Pizzas</h1>
          <PizzasCard />
        </Content>
        <Content id="sides">
          <h1>Sides</h1>
          <SidesCards />
        </Content>
        <Content id="drinks">
          <h1>Drinks</h1>
          <DrinksCard />
        </Content>
      </Container>
      <Nav />
    </>
  );
};
