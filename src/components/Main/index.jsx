import React from "react";
import { Container, Content, photoContainer } from "./styles";

import { Link } from "react-router-dom";
import { InViewSection, InViewSection2 } from "../inViewSection/inViewSection";

export const Main = () => {
  return (
    <Container>
      <Content>
        <div id="main">
          <InViewSection>
            <span>Only Today!</span>
            <p>Large Pizza + Coke for only:</p>
            <span>£9.99</span>
          </InViewSection>
          <InViewSection2>
            <Link to="/menu">
              <button>Order Now!</button>
            </Link>
          </InViewSection2>
        </div>
      </Content>
    </Container>
  );
};
