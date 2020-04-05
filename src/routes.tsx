import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BillScreen from "./screens/BillScreen";
import CrustScreen from "./screens/CrustScreen";
import SizeScreen from "./screens/SizeScreen";
import ToppingsScreen from "./screens/ToppingsScreen";

type StackParamList = {
  Size: undefined;
  Crust: undefined;
  Toppings: undefined;
  Bill: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Size" component={SizeScreen} />
        <Stack.Screen name="Crust" component={CrustScreen} />
        <Stack.Screen name="Toppings" component={ToppingsScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
