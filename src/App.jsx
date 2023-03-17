import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/index";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContex";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <BackToTopButton />
        <GlobalStyle />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
