import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Menu } from "../components/Menu";
import { Toaster } from "react-hot-toast";
import { Video } from "../components/Video";

export const Home = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Main />
      <Menu />
      <Video />
      <Footer />
    </>
  );
};
