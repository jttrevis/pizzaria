import React from "react";

import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Content, Container } from "./Menu.style";

import { Card, SidesCard, DrinksCard } from "../components/Card/Cards";
import InViewSection from "../components/inViewSection/inViewSection";

export const MenuPage = () => {
  return (
    <>
      <Toaster />
      <Container>
        <Content>
          <Card />
        </Content>
        <Content>
          <SidesCard />
        </Content>
        <Content>
          <DrinksCard />
        </Content>
      </Container>
    </>
  );
};
