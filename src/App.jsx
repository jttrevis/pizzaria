import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Localization } from "./components/Localization"
import { Main } from "./components/Main"
import { Menu } from "./components/Menu"
import { GlobalStyle } from "./styles/global"


function App() {
  return (
    <>
      <Header />
      <Main />
      <Menu />
      <Localization />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
