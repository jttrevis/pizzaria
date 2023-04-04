import React, { useContext } from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";

import { Cards } from "../Card/CardsStyles";
import { Container as CardContainer } from "../Card/CardsStyles";
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { CartContext } from "../../context/CartContex";
import { motion } from "framer-motion";

export const Menu = () => {
  const [document] = useAllPrismicDocumentsByType("offers");
  const { addToCart } = useContext(CartContext);
  if (!document) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Container id="menu">
        <div className="text-mid">
          <h3>Offers</h3>
        </div>
        <div>
          <CardContainer>
            {document.map((item) => {
              return (
                <Cards key={item.id}>
                  <div>
                    <img
                      src={item.data.item_image.url}
                      alt={item.data.item_image.alt}
                      image={item.data.item_image.url}
                    />
                    <PrismicRichText field={item.data.item_name} />

                    <PrismicRichText field={item.data.item_ingredients} />
                  </div>

                  <button
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.data.item_name[0].text,
                        image: item.data.item_image.url,
                        price: parseInt(item.data.price[0].text, 10),
                      });
                    }}
                  >
                    <PrismicRichText field={item.data.price} />
                  </button>
                </Cards>
              );
            })}
          </CardContainer>
        </div>
        <div>
          <h3>
            Check our <Link to="/menu">Menu</Link>{" "}
          </h3>
        </div>
      </Container>
    </motion.div>
  );
};
