import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CustomTouchable from "./CustomTouchable";

function ChoiceView({option, marginBottom, isCorrect}) {
  return (
    <CustomTouchable
     containerStyle={[styles.choiceBackground, {marginBottom: marginBottom}]}
     rippleColor={isCorrect ? 'rgba(40, 177, 143, 0.70)' : 'rgba(220, 95, 95, 0.70)'}>
      <Text style={styles.choiceText}>{option.answer}</Text>
    </CustomTouchable>
  );
}

const styles = StyleSheet.create({
  choiceBackground: {
    backgroundColor: "#FFFFFF80",
    padding: 12,
    marginLeft: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "78%",
    borderRadius: 8
  },
  choiceText: {
    color: "white",
    fontSize: 17,
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 1
  },
});

export default ChoiceView;
