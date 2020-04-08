import React, { useEffect, useState } from "react";
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PRIMARY_TEXT_COLOR, WHITE } from "../constants/colors";
import {
  APP_SIDE_MARGIN,
  DEVICE_WIDTH,
  FONT_SIZES,
} from "../constants/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_TEXT_COLOR + 45,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: APP_SIDE_MARGIN,
  },
  confirmCont: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden",
    width: DEVICE_WIDTH * 0.35,
    backgroundColor: WHITE,
    position: "relative",
  },
  confirmIcon: {
    color: PRIMARY_TEXT_COLOR,
  },
  iconCover: {
    position: "absolute",
    top: 10,
    right: "20%",
    alignSelf: "flex-end",
    height: 60,
    backgroundColor: WHITE,
  },
  title: {
    color: PRIMARY_TEXT_COLOR,
    textTransform: "uppercase",
    fontSize: FONT_SIZES.md,
  },
});

const ConfirmationPopup = ({ active, finish, title }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [cover, setCover] = useState(new Animated.Value(1));

  const hide = () => {
    Animated.timing(opacity, {
      delay: 2500,
      toValue: 0,
      duration: 1000,
    }).start(() => {
      finish();
      setCover(new Animated.Value(1));
    });
  };

  const uncover = () => {
    Animated.timing(cover, {
      toValue: 0,
      duration: 500,
    }).start(hide);
  };

  const show = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
    }).start(uncover);
  };

  useEffect(() => {
    if (active) show();
  }, [active]);

  const coverWidth = cover.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "50%"],
  });
  return (
    <Modal transparent visible={active} onRequestClose={hide}>
      <Animated.View style={{ ...styles.container, opacity }}>
        <TouchableOpacity style={styles.confirmCont} activeOpacity={1}>
          <Ionicons name="ios-checkmark" size={60} style={styles.confirmIcon} />
          <Text style={styles.title}>{title}</Text>
          <Animated.View
            style={{
              ...styles.iconCover,
              width: coverWidth,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};

export default ConfirmationPopup;
