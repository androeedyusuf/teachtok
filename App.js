import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabBarNavigationComponent from "./app/components/TabBarNavigationComponent";

export default function App() {
  const navigationComponent = 
        <TabBarNavigationComponent/>;
  return (
    <NavigationContainer>
      {navigationComponent}
    </NavigationContainer>
  );
}