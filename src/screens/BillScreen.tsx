/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackParamList } from "../routes";
import {
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  SLIDER_COLOR,
} from "../constants/colors";
import { FONT_SIZES } from "../constants/dimensions";
import { CRUSTIES, SIZES } from "../constants/pizzaOptions";
import { Context } from "../context/PizzaContext";

import MainAppContainer from "../layouts/MainAppContainer";
import DefaultHeader from "../components/DefaultHeader";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  billItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  itemTitle: {
    fontSize: FONT_SIZES.md,
    fontWeight: "bold",
    color: SECONDARY_TEXT_COLOR,
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: FONT_SIZES.sm,
    color: SECONDARY_TEXT_COLOR,
  },
  itemPrice: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "bold",
    color: SECONDARY_TEXT_COLOR,
  },
  sumContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderColor: SLIDER_COLOR,
    borderTopWidth: 1,
  },
  sumText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    color: PRIMARY_TEXT_COLOR,
  },
});

type BillScreenNavigationProp = StackNavigationProp<StackParamList, "Toppings">;

type Props = {
  navigation: BillScreenNavigationProp;
};

const BillItem = ({ title, description, price }) => {
  return (
    <View style={styles.billItem}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{description}</Text>
      </View>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
};

const BillScreen = ({ navigation }: Props) => {
  const { state } = useContext(Context);
  const [size, setSize] = useState();
  const [crust, setCrust] = useState();
  const [toppings, setToppings] = useState();

  const getSize = (pizzaSize: string | undefined) => {
    const index = SIZES.findIndex((e) => e.short === pizzaSize);
    setSize(SIZES[index]);
  };

  const getCrust = (pizzaCrust: string | undefined) => {
    const index = CRUSTIES.findIndex((e) => e.name === pizzaCrust);
    setCrust(CRUSTIES[index]);
  };

  useEffect(() => {
    getSize(state.size);
    getCrust(state.crusty);
  }, [state]);

  return (
    <MainAppContainer
      title="your pizza bill"
      headerContent={<DefaultHeader />}
      mainContent={
        <View style={styles.container}>
          <BillItem
            title={`${size && size.name} Pizza`}
            description="x 1"
            price={size && size.price.toFixed(2)}
          />
          <BillItem
            title={`${crust && crust.name} Crust`}
            description="x 1"
            price={crust && crust.price.toFixed(2)}
          />
          <BillItem
            title="Aditional toppings"
            description="x 1"
            price="12.00"
          />
          <View style={styles.sumContainer}>
            <Text style={styles.sumText}>Sum</Text>
            <Text style={styles.sumText}>{`$ ${state.price.toFixed(2)}`}</Text>
          </View>
          <PrimaryButton title="place order" onPress={() => {}} />
        </View>
      }
    />
  );
};

export default BillScreen;
