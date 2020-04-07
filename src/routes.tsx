import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import BillScreen from "./screens/BillScreen";
import CrustScreen from "./screens/CrustScreen";
import SizeScreen from "./screens/SizeScreen";
import ToppingsScreen from "./screens/ToppingsScreen";

export type StackParamList = {
  Size: undefined;
  Crust: undefined;
  Toppings: undefined;
  Bill: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffc100",
            shadowColor: "transparent",
            elevation: 0,
          },
          headerTitle: "",
          headerBackImage: () => (
            <Ionicons
              name="ios-arrow-back"
              size={35}
              style={{
                color: "#fff",
                paddingLeft: 20,
              }}
            />
          ),
          headerBackTitle: " ",
        }}
      >
        <Stack.Screen name="Size" component={SizeScreen} />
        <Stack.Screen name="Crust" component={CrustScreen} />
        <Stack.Screen name="Toppings" component={ToppingsScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
