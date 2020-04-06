import React from "react";
import { StyleSheet, View } from "react-native";

import { APP_SIDE_MARGIN } from "../constants/dimensions";

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: APP_SIDE_MARGIN,
    paddingBottom: APP_SIDE_MARGIN * 1.3,
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

export interface MainAppContainerProps {
  mainContent: React.ReactElement;
  headerContent: React.ReactElement;
}

const MainAppContainer: React.FC<MainAppContainerProps> = ({
  mainContent,
  headerContent,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>{headerContent}</View>
      <View style={styles.mainContent}>{mainContent}</View>
    </View>
  );
};

export default MainAppContainer;
