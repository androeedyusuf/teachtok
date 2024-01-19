import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, AppState, Text, Dimensions } from "react-native";
import feedRepository from "../api/feedRepository";
import FeedListComponent from "../components/FeedListComponent";
import TimerComponent from "../components/TimerComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from "expo-constants";

function FeedScreen(props) {
  const [data, setData] = useState([]);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (appStateVisible == "active") {
        setTimer((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const loadNextQuestion = async () => {
    feedRepository.loadNextQuestion(data, setData);
  };

  useEffect(() => {
    loadNextQuestion();
  }, []);

  return (
    <View style={styles.screen}>
      <FeedListComponent data={data} loadNextQuestion={loadNextQuestion} />
      <View style={styles.topBar}>
        <TimerComponent timer={timer} />

        <View style={styles.title}>
          <Text style={styles.forYou}>For You</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.search}>
          <MaterialCommunityIcons name="magnify" color="white" size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  search: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 50,
    alignItems: "center",
  },
  topBar: {
    marginEnd: 16,
    top: Constants.statusBarHeight,
    position: "absolute",
    paddingStart: 16,
    paddingEnd: 16,
    flex: 1,
    flexWrap: "wrap",
    alignContent: "stretch",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forYou: {
    color: "white",
    fontSize: 16,
  },
  title: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    backgroundColor: "white",
    width: 30,
    height: 4,
    marginTop: 5,
  },
});

export default FeedScreen;
