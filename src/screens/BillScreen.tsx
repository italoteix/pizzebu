/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackParamList } from "../routes";

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
});

type BillScreenNavigationProp = StackNavigationProp<StackParamList, "Toppings">;

type Props = {
  navigation: BillScreenNavigationProp;
};

const BillScreen = ({ navigation }: Props) => {
  return (
    <MainAppContainer
      title="your pizza bill"
      headerContent={<DefaultHeader />}
      mainContent={
        <View style={styles.container}>
          <PrimaryButton title="place order" onPress={() => {}} />
        </View>
      }
    />
  );
};

export default BillScreen;
