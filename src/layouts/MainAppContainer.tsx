import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc100",
  },
  headerContent: {
    flex: 1,
  },
  mainContent: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});

const MainAppContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent} />
      <View style={styles.mainContent} />
    </View>
  );
};

export default MainAppContainer;
