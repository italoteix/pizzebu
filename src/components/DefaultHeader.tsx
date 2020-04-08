import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { APP_SIDE_MARGIN, DEVICE_WIDTH } from "../constants/dimensions";
import images from "../../assets/images";
import { Context } from "../context/PizzaContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: APP_SIDE_MARGIN,
  },
  titleContainer: {
    flex: 3,
    justifyContent: "space-between",
  },
  logo: {
    width: "100%",
    height: "40%",
    marginTop: "20%",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: "15%",
  },
  imgContainer: {
    flex: 2,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_WIDTH * 0.6,
    position: "absolute",
    margin: 0,
    bottom: "-20%",
    left: "-15%",
  },
});

const DefaultHeader = () => {
  const { state } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={images.logotype}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>{`$ ${state.price.toFixed(2)}`}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={images.pizza}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default DefaultHeader;
