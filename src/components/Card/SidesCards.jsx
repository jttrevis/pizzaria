import React, { useContext } from "react";
import { Cards, Container } from "./CardsStyles";

import { CartContext } from "../../context/CartContex";
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { InViewSection } from "../inViewSection/inViewSection";

export const SidesCards = () => {
  const [document] = useAllPrismicDocumentsByType("sides");
  console.log(document);

  const { addToCart } = useContext(CartContext);

  if (!document) return null;

  return (
    <Container>
      {document.map((item) => {
        return (
          <InViewSection>
            <Cards key={item.id}>
              <div>
                <PrismicRichText field={item.data.item_name} />
                <img
                  src={item.data.item_image.url}
                  alt={item.data.item_image.alt}
                  image={item.data.item_image.url}
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
          </InViewSection>
        );
      })}
    </Container>
  );
};
