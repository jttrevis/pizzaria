import React from 'react'
import { Head } from '../components/Head'
import { Footer } from '../components/Footer'

import { Content, Container } from './Menu.style'
import { DrinksCard, PizzaCard, SidesCard } from '../components/Card'




export const MenuPage = () => {
  return (
    <Container>
      <Head/>
      <Content>
        <PizzaCard/>
      </Content>
      <Content>
        <SidesCard/>
      </Content>
      <Content>
        <DrinksCard/>
      </Content>
      <Footer/>
    </Container>
  )
}
