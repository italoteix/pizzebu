import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import images from "../../assets/images";
import { APP_SIDE_MARGIN, DEVICE_WIDTH } from "../constants/dimensions";
import { SELECTED_COLOR, SLIDER_COLOR } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: APP_SIDE_MARGIN * 0.6,
    flex: 1,
  },
  imageContainer: {
    width: DEVICE_WIDTH * 0.25,
    height: DEVICE_WIDTH * 0.25,
    borderRadius: DEVICE_WIDTH * 0.125,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: APP_SIDE_MARGIN * 0.3,
  },
  image: {
    width: "90%",
    height: "90%",
  },
});

const IngredientItem = ({ topping, isSelected, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <>
        <View
          style={[
            styles.imageContainer,
            { borderColor: isSelected ? SELECTED_COLOR : SLIDER_COLOR },
          ]}
        >
          <Image
            resizeMode="contain"
            style={styles.image}
            source={images[topping.imgUrl]}
          />
        </View>
        <Text>{topping.name}</Text>
      </>
    </TouchableOpacity>
  );
};

export default IngredientItem;
