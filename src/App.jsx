import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";
import { MenuPage } from "./pages/MenuPage";
import { Contact } from "./pages/Contact";
import { StateContext } from "./context/StateContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Cart } from "./pages/Cart";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Footer } from "./components/Footer";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <BackToTopButton />
        <GlobalStyle />
        <Footer />
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
