
import { Home } from './pages/Home'
import { GlobalStyle } from "./styles/global"

import {

  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom'
import { MenuPage } from './pages/MenuPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
