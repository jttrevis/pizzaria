
import { Home } from './pages/Home'
import { GlobalStyle } from "./styles/global"
import { MenuPage } from './pages/MenuPage'
import { Contact } from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
