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
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 8,
  },
});

const MainAppContainer = ({ mainContent, headerContent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>{headerContent}</View>
      <View style={styles.mainContent}>{mainContent}</View>
    </View>
  );
};

export default MainAppContainer;
