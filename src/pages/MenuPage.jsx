import React from 'react'
import { Head } from '../components/Head'
import { Footer } from '../components/Footer'

import { Content, Container } from './Menu.style'
import { CardItem } from '../components/Card'




export const MenuPage = () => {
  return (
    <Container>
      <Head/>
      <Content>
        <CardItem/>
      </Content>
      <Footer/>
    </Container>
  )
}
