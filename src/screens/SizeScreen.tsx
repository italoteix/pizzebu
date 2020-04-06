/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import images from "../../assets/images";
import { DEVICE_WIDTH } from "../constants/dimensions";
import { SIZES } from "../constants/pizzaOptions";
import { Context, StateType } from "../context/PizzaContext";
import { StackParamList } from "../routes";

import MainAppContainer from "../layouts/MainAppContainer";
import DefaultHeader from "../components/DefaultHeader";
import Slider from "../components/Slider";
import PrimaryButton from "../components/PrimaryButton";

type SizeScreenNavigationProp = StackNavigationProp<StackParamList, "Size">;

type Props = {
  navigation: SizeScreenNavigationProp;
};

const SizeScreen = ({ navigation }: Props) => {
  const pizza: StateType = useContext(Context);
  const [imageSize, setImageSize] = useState(0);

  const getImageSize = (size: string | undefined) => {
    const index = SIZES.findIndex((e) => e.short === size);
    setImageSize(DEVICE_WIDTH * 0.3 + index / 2);
  };

  useEffect(() => getImageSize(pizza.size), [pizza.size]);
  return (
    <MainAppContainer
      title="size"
      headerContent={<DefaultHeader />}
      mainContent={
        <>
          <Image
            source={images.pizzaOutline}
            style={{ width: imageSize, height: imageSize }}
          />
          <Slider />
          <PrimaryButton
            title="next step"
            onPress={() => navigation.navigate("Crust")}
          />
        </>
      }
    />
  );
};

export default SizeScreen;
