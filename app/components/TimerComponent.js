import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function TimerComponent({ timer, style }) {
  const minutes = timer / 60;
  const seconds = timer;
  var text = seconds + "s";
  if (minutes > 1) {
    text = Math.floor(minutes) + "m"
  }
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name="timer" color="#FFFFFF99" size={20} />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 50
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF99",
    marginStart: 4,
  },
});

export default TimerComponent;
