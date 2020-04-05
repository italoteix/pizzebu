import React from "react";

import Routes from "./src/routes";
import { Provider } from "./src/context/PizzaContext";

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
