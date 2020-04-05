import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";
import { Provider } from "./src/context/PizzaContext";

const App = () => {
  return (
    <Provider>
      <StatusBar barStyle="light-content" backgroundColor="#ffc100" />
      <Routes />
    </Provider>
  );
};

export default App;
