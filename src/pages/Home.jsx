import React from "react";

import { Main } from "../components/Main";
import { Menu } from "../components/Menu";
import { Toaster } from "react-hot-toast";
import { Video } from "../components/Video";

export const Home = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />

      <Main />

      <Menu />

      <Video />
    </>
  );
};
