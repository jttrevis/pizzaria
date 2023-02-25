import React, { useContext } from "react";
import { Cards, Container } from "./CardsStyles";

import { CartContext } from "../../context/CartContex";
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

export const PizzasCard = () => {
  const [document] = useAllPrismicDocumentsByType("menu");
  console.log(document);

  const { addToCart } = useContext(CartContext);

  if (!document) return null;

  return (
    <Container>
      {document.map((item) => {
        return (
          <Cards key={item.id}>
            <div>
              <PrismicRichText field={item.data.item_name} />
              <img
                src={item.data.item_image.url}
                alt={item.data.item_image.alt}
              />

              <PrismicRichText field={item.data.item_ingredients} />
            </div>

            <button
              onClick={() => {
                addToCart({
                  id: item.id,
                  name: item.data.item_name[0].text,
                  image: item.data.item_image.url,
                  price: parseFloat(item.data.item_price[0].text),
                });
              }}
            >
              <PrismicRichText field={item.data.item_price} />
            </button>
          </Cards>
        );
      })}
    </Container>
  );
};
