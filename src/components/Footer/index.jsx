import React from "react";
import { Container, Content } from "./style";

import instagramImg from '../../assets/instagram.png'
import facebookImg from '../../assets/facebook.png'
import whatsappImg from '../../assets/whatsapp.png'


export const Footer = () => {
  return (
    <>
    <Container>
      <Content id='contact'>
        <a href="https://www.instagram.com/"><img src={instagramImg} alt="instagram" /></a>
        <a href="https://www.facebook.com/"><img src={facebookImg} alt="facebook" /></a>
        <a href="https://www.whatsapp.com/"><img src={whatsappImg} alt="whatsapp" /></a>
      </Content>


    </Container>

    </>

  )
}