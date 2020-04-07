/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import images from "../../assets/images";
import { DEVICE_WIDTH } from "../constants/dimensions";
import { SIZES } from "../constants/pizzaOptions";
import { Context } from "../context/PizzaContext";
import { StackParamList } from "../routes";

import MainAppContainer from "../layouts/MainAppContainer";
import DefaultHeader from "../components/DefaultHeader";
import Slider from "../components/Slider";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imgContainer: { flex: 1, justifyContent: "center" },
});

type SizeScreenNavigationProp = StackNavigationProp<StackParamList, "Size">;

type Props = {
  navigation: SizeScreenNavigationProp;
};

const SizeScreen = ({ navigation }: Props) => {
  const { state, changePizzaSize } = useContext(Context);
  const [imageSize, setImageSize] = useState(0);

  const getImageSize = (size: string | undefined) => {
    const index = SIZES.findIndex((e) => e.short === size);
    const newSize = DEVICE_WIDTH * (0.4 + index / 20);
    setImageSize(newSize);
  };

  const shortSizes = SIZES.map((size) => size.short);

  useEffect(() => {
    getImageSize(state.size);
  }, [state.size]);
  return (
    <MainAppContainer
      title="size"
      headerContent={<DefaultHeader />}
      mainContent={
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={images.pizzaOutline}
              style={{
                width: imageSize,
                height: imageSize,
              }}
            />
          </View>
          <Slider values={shortSizes} onValuesChange={changePizzaSize} />
          <PrimaryButton
            title="next step"
            onPress={() => navigation.navigate("Crust")}
          />
        </View>
      }
    />
  );
};

export default SizeScreen;
