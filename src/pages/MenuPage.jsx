import React from "react";

import { Toaster } from "react-hot-toast";
import { Content, Container } from "./Menu.style";

import { Card, SidesCard, DrinksCard } from "../components/Card/Cards";
import { Nav } from "../components/Nav/Nav";

export const MenuPage = () => {
  return (
    <>
      <Toaster />
      <Container>
        <Content id="pizzas">
          <h1>Pizzas</h1>
          <Card />
        </Content>
        <Content id="sides">
          <h1>Sides</h1>
          <SidesCard />
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
