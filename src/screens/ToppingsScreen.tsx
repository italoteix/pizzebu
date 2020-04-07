/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { TOPPINGS } from "../constants/pizzaOptions";
import { Context } from "../context/PizzaContext";
import { StackParamList } from "../routes";

import MainAppContainer from "../layouts/MainAppContainer";
import DefaultHeader from "../components/DefaultHeader";
import IngredientItem from "../components/IngredientItem";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

type ToppingsScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "Toppings"
>;

type Props = {
  navigation: ToppingsScreenNavigationProp;
};

const ToppingsScreen = ({ navigation }: Props) => {
  const { state, toggleTopping } = useContext(Context);
  const [selectedToppings, setSelectedToppings] = useState([]);

  useEffect(() => {
    const selectedToppingsList = TOPPINGS.map(
      (top) => state.toppings.indexOf(top.name) >= 0
    );
    setSelectedToppings(selectedToppingsList);
  }, [state.toppings]);

  return (
    <MainAppContainer
      title="ingredients"
      headerContent={<DefaultHeader />}
      mainContent={
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={3}
            style={{ width: "100%" }}
            data={TOPPINGS}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <IngredientItem
                topping={item}
                onPress={() => toggleTopping(item.name)}
                isSelected={selectedToppings[index]}
              />
            )}
          />
          <PrimaryButton
            title="next step"
            onPress={() => navigation.navigate("Bill")}
          />
        </View>
      }
    />
  );
};

export default ToppingsScreen;
