import React from "react";
import { Container, Content } from "./style";

import instagramImg from '../../assets/instagram.png'
import facebookImg from '../../assets/facebook.png'
import whatsappImg from '../../assets/whatsapp.png'


export const Footer = () => {
  return (
    <Container>
      <Content id='contact'>
        <a href="#instagram"><img src={instagramImg} alt="instagram" /></a>
        <a href="#facebook"><img src={facebookImg} alt="facebook" /></a>
        <a href="#whatsapp"><img src={whatsappImg} alt="whatsapp" /></a>
      </Content>

    </Container>

  )
}