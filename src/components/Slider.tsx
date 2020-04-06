import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import { DEVICE_WIDTH } from "../constants/dimensions";

const width = DEVICE_WIDTH * 0.7;

const Slider = () => {
  return (
    <MultiSlider
      max={2}
      step={1}
      snapped
      sliderLength={width}
      trackStyle={{
        height: 20,
        borderRadius: 10,
        backgroundColor: "#eee",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}
      markerContainerStyle={{ marginTop: 10, elevation: 2 }}
      markerStyle={{
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 30,
        height: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      selectedStyle={{ backgroundColor: "#ff6900" }}
    />
  );
};

export default Slider;
