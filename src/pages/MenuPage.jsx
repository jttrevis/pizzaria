import React from "react";

import { Toaster } from "react-hot-toast";
import { Content, Container } from "./Menu.style";

import { Nav } from "../components/Nav/Nav";
import { SidesCards } from "../components/Card/SidesCards";
import { PizzasCard } from "./../components/Card/PizzasCards";
import { DrinksCard } from "./../components/Card/DrinksCards";
import { motion } from "framer-motion";

export const MenuPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <Container>
        <Content id="pizzas">
          <h1>Pizzas</h1>
          <h2>
            P<br />
            i<br />z<br />z<br />a<br />s
          </h2>

          <h3>
            P<br />
            i<br />z<br />z<br />a<br />s
          </h3>

          <PizzasCard />
        </Content>
        <Content id="sides">
          <h1>Sides</h1>
          <h2>
            S<br />
            i<br />d<br />e<br />s
          </h2>

          <h3>
            S<br />
            i<br />d<br />e<br />s
          </h3>
          <SidesCards />
        </Content>
        <Content id="drinks">
          <h1>Drinks</h1>
          <h2>
            D<br />
            r<br />i<br />n<br />k<br />s
          </h2>

          <h3>
            D<br />
            r<br />i<br />n<br />k<br />s
          </h3>
          <DrinksCard />
        </Content>
      </Container>
      <Nav />
    </motion.div>
  );
};
