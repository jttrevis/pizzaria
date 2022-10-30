import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";
import { MenuPage } from "./pages/MenuPage";
import { Contact } from "./pages/Contact";
import { StateContext } from "./context/StateContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
