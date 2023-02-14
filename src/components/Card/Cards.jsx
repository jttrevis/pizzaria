import React from "react";
import { Container, Cards } from "./CardsStyles";

import pizzasData from "../../pizzasData.json";
import { useStateContext } from "../../context/StateContext";
import InViewSection from "../inViewSection/inViewSection";

const pizzaDb = pizzasData.pizzas;
const sidesDb = pizzasData.sides;
const drinksDb = pizzasData.drinks;

export const Card = () => {
  const { qty, onAdd } = useStateContext();
  return (
    <Container>
      {pizzaDb.map((item, index) => (
        <InViewSection key={item.id}>
          <Cards>
            <div>
              <h1>{item.name}</h1>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.ingredients}</p>
              <button onClick={() => onAdd(item, qty)}>£{item.price}</button>
            </div>
          </Cards>
        </InViewSection>
      ))}
    </Container>
  );
};

export const SidesCard = () => {
  const { qty, onAdd } = useStateContext();
  return (
    <Container>
      {sidesDb.map((item, index) => (
        <InViewSection key={item.id}>
          <Cards>
            <div>
              <h1>{item.name}</h1>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.ingredients}</p>
              <button onClick={() => onAdd(item, qty)}>£{item.price}</button>
            </div>
          </Cards>
        </InViewSection>
      ))}
    </Container>
  );
};

export const DrinksCard = () => {
  const { qty, onAdd } = useStateContext();
  return (
    <Container>
      {drinksDb.map((item, index) => (
        <InViewSection key={item.id}>
          <Cards>
            <div>
              <h1>{item.name}</h1>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.ingredients}</p>
              <button onClick={() => onAdd(item, qty)}>£{item.price}</button>
            </div>
          </Cards>
        </InViewSection>
      ))}
    </Container>
  );
};
