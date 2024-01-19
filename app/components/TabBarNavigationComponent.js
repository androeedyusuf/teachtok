import React from "react";
import FeedScreen from "../screens/FeedScreen";
import PlaceholderScreen from "../screens/PlaceholderScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabBarNavigationComponent(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#FFFFFF66",
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={optionsStyle("home", "Home")}
      />
      <Tab.Screen
        name="Discover"
        component={PlaceholderScreen}
        options={optionsStyle("compass", "Discover")}
      />
      <Tab.Screen
        name="Activity"
        component={PlaceholderScreen}
        options={optionsStyle("timer", "Activity")}
      />
      <Tab.Screen
        name="Bookmarks"
        component={PlaceholderScreen}
        options={optionsStyle("bookmark", "Bookmarks")}
      />
      <Tab.Screen
        name="Profile"
        component={PlaceholderScreen}
        options={optionsStyle("account-circle", "Profile")}
      />
    </Tab.Navigator>
  );
}

const optionsStyle = (icon, text) => {
    return {
      tabBarLabel: text,
      activeTintColor: "white",
      inactiveTintColor: "#FFFFFF66",
      activeTintColor: "#FFFFFF",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons
          name={icon}
          color={color}
          size={size}
        />
      ),
    };
  };

export default TabBarNavigationComponent;
