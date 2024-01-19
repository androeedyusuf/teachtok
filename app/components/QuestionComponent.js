import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import ChoiceView from "./ChoiceView";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ButtonsView from "./ButtonsView";

function QuestionComponent({ question }) {
  const { width, height } = Dimensions.get("window");tabBarHeight
  const tabBarHeight = useBottomTabBarHeight();
  const contentHeight = height - tabBarHeight;

  return (
    <ImageBackground
      source={{ uri: question.image }}
      resizeMode="cover"
      style={[styles.backgroundImage, { width: width, height: contentHeight }]}
    >
      <View style={styles.overlay} />

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      <ChoiceView
        option={question?.options[0]}
        marginBottom={8}
        isCorrect={question?.options[0].id == question.correctAnswer.id}
      />
      <ChoiceView
        option={question?.options[1]}
        marginBottom={8}
        isCorrect={question?.options[2].id == question.correctAnswer.id}
      />
      <ChoiceView
        option={question?.options[2]}
        marginBottom={24}
        isCorrect={question?.options[2].id == question.correctAnswer.id}
      />

      {/* Author & description */}
      <Text style={styles.userText}>{question.user.name}</Text>
      <Text style={styles.descriptionText}>{question.description}</Text>

      {/* Playlist */}
      <View style={styles.playlistBackground}>
        <View style={styles.playlist}>
          <Image
            style={styles.playlistIcon}
            source={require("../assets/playlist.png")}
          />
          <Text style={styles.playlistText} numberOfLines={1}>
            {question.playlist}
          </Text>
        </View>
        <Image
          style={styles.playlistArrow}
          source={require("../assets/arrow.png")}
        />
      </View>

      <ButtonsView
        user={question.user}
        style={{
          position: "absolute",
          bottom: 60,
          end: 16,
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexGrow: 1,
    alignSelf: "stretch",
  },
  questionContainer: {
    backgroundColor: "#00000099",
    top: 110,
    start: 16,
    position: "absolute",
    padding: 6,
    marginEnd: "20%",
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignSelf: "flex-start",
  },
  questionText: {
    color: "white",
    fontSize: 22,
  },
  userText: {
    color: "white",
    fontSize: 15,
    marginStart: 16,
    marginBottom: 6,
  },
  descriptionText: {
    color: "white",
    fontSize: 13,
    marginStart: 16,
    marginBottom: 16,
  },
  playlistBackground: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#161616",
    padding: 16,
    width: "100%",
  },
  playlistText: {
    color: "white",
    fontSize: 13,
    right: -4,
  },
  playlist: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  playlistIcon: {
    width: 20,
    height: 16,
    resizeMode: "cover",
  },
  playlistArrow: {
    width: 16,
    height: 20,
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.45,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
});

export default QuestionComponent;
