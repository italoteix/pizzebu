/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

import { StackParamList } from "../routes";
import {
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  SLIDER_COLOR,
} from "../constants/colors";
import { DEVICE_WIDTH, FONT_SIZES } from "../constants/dimensions";
import { Context } from "../context/PizzaContext";
import images from "../../assets/images";

import MainAppContainer from "../layouts/MainAppContainer";
import PrimaryButton from "../components/PrimaryButton";
import Popup from "../components/Popup";

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
    marginBottom: 15,
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
  logo: {
    marginHorizontal: "auto",
    width: "100%",
    height: DEVICE_WIDTH * 0.2,
  },
  pizza: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 0.5,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

type BillScreenNavigationProp = StackNavigationProp<StackParamList, "Toppings">;

type Props = {
  navigation: BillScreenNavigationProp;
};

const Header = () => {
  return (
    <>
      <Image
        source={images.logotype}
        resizeMode="contain"
        style={styles.logo}
      />
      <Image
        source={images.pizzaHand}
        style={styles.pizza}
        resizeMode="contain"
      />
    </>
  );
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
  const { state, resetState } = useContext(Context);
  const [extraToppings, setExtraToppings] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const resetApp = () => {
    setShowPopup(false);
    resetState();
    navigation.dispatch(StackActions.popToTop());
  };

  useEffect(() => {
    const extraTop = state.toppings.length - state.size.maxToppings;

    if (extraTop < 1) {
      setExtraToppings({ count: 0, price: 0 });
      return;
    }

    setExtraToppings({
      count: extraTop,
      price: extraTop * state.extraToppingPrice,
    });
  }, [state]);

  return (
    <MainAppContainer
      title="your pizza bill"
      headerContent={<Header />}
      mainContent={
        <View style={styles.container}>
          <Popup title="success" finish={resetApp} active={showPopup} />
          <BillItem
            title={`${state?.size?.name} Pizza`}
            description="x 1"
            price={state?.size.price.toFixed(2)}
          />
          <BillItem
            title={`${state?.crusty.name} Crust`}
            description="x 1"
            price={state?.crusty.price.toFixed(2)}
          />
          {extraToppings?.count > 0 && (
            <BillItem
              title="Aditional toppings"
              description={`x ${extraToppings?.count}`}
              price={extraToppings?.price.toFixed(2)}
            />
          )}
          <View style={styles.sumContainer}>
            <Text style={styles.sumText}>Sum</Text>
            <Text style={styles.sumText}>{`$ ${state.price.toFixed(2)}`}</Text>
          </View>
          <PrimaryButton
            title="place order"
            onPress={() => setShowPopup(true)}
          />
        </View>
      }
    />
  );
};

export default BillScreen;
