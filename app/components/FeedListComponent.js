import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import QuestionComponent from "../components/QuestionComponent";

function FeedListComponent({ data, loadNextQuestion }) {
    
  return data ? (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <QuestionComponent question={item}/>}
      contentContainerStyle={{ flexGrow: 1 }}
      pagingEnabled={true}
      onEndReached={loadNextQuestion}
      onEndReachedThreshold={0.1}
    />
  ) : (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: "100%",
  },
});

export default FeedListComponent;
