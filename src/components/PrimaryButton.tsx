import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffc100",
    height: 46,
    width: "100%",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

interface PrimaryButtonType {
  onPress: CallableFunction;
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonType> = ({ onPress, title }) => {
  return (
    <RectButton style={styles.button} onPress={() => onPress()}>
      <View accessible>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </RectButton>
  );
};

export default PrimaryButton;
