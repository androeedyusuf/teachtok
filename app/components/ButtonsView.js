import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function ButtonsView({ user, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <Image style={styles.plus} source={require("../assets/plus.png")} />
      </View>
      <ButtonActionView icon={require("../assets/like.png")} text={87} />
      <ButtonActionView icon={require("../assets/comments.png")} text={2} />
      <ButtonActionView icon={require("../assets/bookmark.png")} text={203} />
      <ButtonActionView icon={require("../assets/share.png")} text={17} />
    </View>
  );
}

function ButtonActionView({ icon, text }) {
  return (
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4
  },
  avatar: {
    width: 45,
    height: 45,
  },
  plus: {
    width: 22,
    height: 22,
    top: -11,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  iconContainer: {
    flex: 1,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    color: "white",
    marginTop: 2,
  },
});

export default ButtonsView;
