import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import { DEVICE_WIDTH, FONT_SIZES } from "../constants/dimensions";
import {
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SHADOW_COLOR,
  SLIDER_COLOR,
  WHITE,
} from "../constants/colors";

const width = DEVICE_WIDTH * 0.7;

const styles = StyleSheet.create({
  baseTrack: {
    height: 20,
    borderRadius: 10,
    backgroundColor: SLIDER_COLOR,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  selectedTrack: { backgroundColor: SECONDARY_COLOR },
  markerContainer: { marginTop: 10, elevation: 2 },
  marker: {
    backgroundColor: WHITE,
    borderRadius: 15,
    width: 30,
    height: 30,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: width * 1.1,
    paddingHorizontal: "3%",
    paddingRight: "3.5%",
  },
  labelText: {
    fontSize: FONT_SIZES.sm,
    color: PRIMARY_TEXT_COLOR,
  },
});

const Label = () => {
  const x = ["S", "M", "L"];

  return (
    <FlatList
      horizontal
      bounces={false}
      contentContainerStyle={styles.label}
      data={x}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text style={styles.labelText}>{item}</Text>}
    />
  );
};

const Slider = () => {
  return (
    <>
      <Label />
      <MultiSlider
        max={2}
        step={1}
        snapped
        sliderLength={width}
        trackStyle={styles.baseTrack}
        markerContainerStyle={styles.markerContainer}
        markerStyle={styles.marker}
        selectedStyle={styles.selectedTrack}
      />
    </>
  );
};

export default Slider;
