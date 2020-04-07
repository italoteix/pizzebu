/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import images from "../../assets/images";
import { DEVICE_WIDTH } from "../constants/dimensions";
import { CRUSTIES } from "../constants/pizzaOptions";
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

type CrustScreenNavigationProp = StackNavigationProp<StackParamList, "Crust">;

type Props = {
  navigation: CrustScreenNavigationProp;
};

const CrustScreen = ({ navigation }: Props) => {
  const { state, changePizzaCrust } = useContext(Context);
  const [scaleRatio, setScaleRatio] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);

  const getImageScale = (crust: string | undefined) => {
    const index = CRUSTIES.findIndex((e) => e.name === crust);
    const newRatio = 1 + index / 10;
    setScaleRatio(newRatio);
    setSliderValue(index);
  };

  const crustiesList = CRUSTIES.map((crust) => crust.name);

  useEffect(() => {
    getImageScale(state.crusty);
  }, [state.crusty]);
  return (
    <MainAppContainer
      title="crusties"
      headerContent={<DefaultHeader />}
      mainContent={
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              resizeMode="cover"
              source={images.pizzaSideOutline}
              style={{
                width: DEVICE_WIDTH * 0.65,
                height: DEVICE_WIDTH * 0.25,
                transform: [{ scaleY: scaleRatio }],
              }}
            />
          </View>
          <Slider
            values={crustiesList}
            onValuesChange={changePizzaCrust}
            initialValue={sliderValue}
          />
          <PrimaryButton
            title="next step"
            onPress={() => navigation.navigate("Crust")}
          />
        </View>
      }
    />
  );
};

export default CrustScreen;
