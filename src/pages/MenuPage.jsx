import React from 'react'
import { Head } from '../components/Head'
import { Footer } from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { Content, Container } from './Menu.style'
import { DrinksCard, PizzaCard, SidesCard } from '../components/Card'




export const MenuPage = () => {
  return (
    <>
      <Toaster/>
      <Container>
        <Head/>
        <Content>
          <PizzaCard
          />
        </Content>
        <Content>
          <SidesCard/>
        </Content>
        <Content>
          <DrinksCard/>
        </Content>
        <Footer/>
      </Container>
    </>
  )
}
