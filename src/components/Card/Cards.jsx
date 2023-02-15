import { Container, Cards } from "./CardsStyles";

import pizzasData from "../../pizzasData.json";
import { useStateContext } from "../../context/StateContext";
import InViewSection from "../inViewSection/inViewSection";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const pizzaDb = pizzasData.pizzas;
const sidesDb = pizzasData.sides;
const drinksDb = pizzasData.drinks;

export const Card = (props) => {
  const { cartItems, onAdd, onRemove } = useStateContext();

  return (
    <Container>
      {pizzaDb.map((item, index) => {
        const itemCount = cartItems
          .filter((cartItem) => cartItem.id === item.id)
          .reduce((acc, cartItem) => acc + cartItem.quantity, 0);

        return (
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
                <div>
                  <AiOutlineMinusCircle
                    size={30}
                    color="gold"
                    onClick={() => onRemove(item)}
                  ></AiOutlineMinusCircle>
                  <span>{itemCount}</span>
                  <AiOutlinePlusCircle
                    size={30}
                    color="gold"
                    onClick={() => onAdd(item)}
                  ></AiOutlinePlusCircle>
                </div>

                <button onClick={() => onAdd(item)}>£{item.price}</button>
              </div>
            </Cards>
          </InViewSection>
        );
      })}
    </Container>
  );
};

export const SidesCard = () => {
  const { cartItems, onAdd, onRemove } = useStateContext();
  return (
    <Container>
      {sidesDb.map((item, index) => {
        const itemCount = cartItems
          .filter((cartItem) => cartItem.id === item.id)
          .reduce((acc, cartItem) => acc + cartItem.quantity, 0);

        return (
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
                <div>
                  <AiOutlineMinusCircle
                    size={30}
                    color="gold"
                    onClick={() => onRemove(item)}
                  ></AiOutlineMinusCircle>
                  <span>{itemCount}</span>
                  <AiOutlinePlusCircle
                    size={30}
                    color="gold"
                    onClick={() => onAdd(item)}
                  ></AiOutlinePlusCircle>
                </div>

                <button onClick={() => onAdd(item)}>£{item.price}</button>
              </div>
            </Cards>
          </InViewSection>
        );
      })}
    </Container>
  );
};

export const DrinksCard = () => {
  const { cartItems, onAdd, onRemove } = useStateContext();
  return (
    <Container>
      {drinksDb.map((item, index) => {
        const itemCount = cartItems
          .filter((cartItem) => cartItem.id === item.id)
          .reduce((acc, cartItem) => acc + cartItem.quantity, 0);

        return (
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
                <div>
                  <AiOutlineMinusCircle
                    size={30}
                    color="gold"
                    onClick={() => onRemove(item)}
                  ></AiOutlineMinusCircle>
                  <span>{itemCount}</span>
                  <AiOutlinePlusCircle
                    size={30}
                    color="gold"
                    onClick={() => onAdd(item)}
                  ></AiOutlinePlusCircle>
                </div>

                <button onClick={() => onAdd(item)}>£{item.price}</button>
              </div>
            </Cards>
          </InViewSection>
        );
      })}
    </Container>
  );
};
