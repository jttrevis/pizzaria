import React from "react";
import { Container, Content, photoContainer } from "./styles";

import { Link } from "react-router-dom";
import InViewSection from "../inViewSection/inViewSection";

export const Main = () => {
  return (
    <Container>
      <Content>
        <InViewSection></InViewSection>
        <InViewSection>
          <div id="main">
            <span>Only Today!</span>
            <p>Large Pizza + Coke for only:</p>
            <span>£9.99</span>
            <Link to="/menu">
              <button>Order Now!</button>
            </Link>
          </div>
        </InViewSection>
      </Content>
    </Container>
  );
};
