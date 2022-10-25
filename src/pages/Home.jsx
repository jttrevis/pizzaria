import React from 'react'
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Localization } from "../components/Localization"
import { Main } from "../components/Main"
import { Menu } from "../components/Menu"
import { Toaster } from 'react-hot-toast'

export const Home = () => {
  return (
    <>
      <Toaster/>
      <Header />
      <Main />
      <Menu />
      <Localization />
      <Footer />
    </>
  )
}
