import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { client } from "./services/prismic";
import { PrismicProvider } from "@prismicio/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrismicProvider client={client}>
    <App />
  </PrismicProvider>
);
