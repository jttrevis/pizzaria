import React from "react";
import { Container, Content } from "./style";
import jrLogo from "../../assets/logos/JuniorLogo1.png";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <Container>
        <Content id="contact">
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookMessenger />
          </a>
          <a href="https://www.whatsapp.com/">
            <FaWhatsapp />
          </a>
        </Content>
        <img src={jrLogo} alt="" />
        <p>
          <AiFillCopyrightCircle /> JR.TREVIS Web Developer.All rights reserved.
        </p>
      </Container>
    </>
  );
};
