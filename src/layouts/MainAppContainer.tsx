import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { APP_SIDE_MARGIN, FONT_SIZES } from "../constants/dimensions";
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SHADOW_COLOR,
  WHITE,
} from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  headerContent: {
    flex: 1,
  },
  mainContent: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: APP_SIDE_MARGIN,
    paddingBottom: APP_SIDE_MARGIN * 1.3,
    zIndex: 2,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 8,
  },
  title: {
    color: PRIMARY_TEXT_COLOR,
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginVertical: APP_SIDE_MARGIN,
  },
});

export interface MainAppContainerProps {
  mainContent: React.ReactElement;
  headerContent: React.ReactElement;
  title: string;
}

const MainAppContainer: React.FC<MainAppContainerProps> = ({
  mainContent,
  headerContent,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>{headerContent}</View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>{title}</Text>
        {mainContent}
      </View>
    </View>
  );
};

export default MainAppContainer;
