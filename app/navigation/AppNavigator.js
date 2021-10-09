import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NewListingScreen from "../screens/NewListingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Search from "../screens/Search";
import Notification from "../screens/NotificationScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchFilter from "../screens/SearchFilter";

import routes from "./routes";
import AllListingNavigation from "./AllListingNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather color={color} size={30} name="home" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={"All Listings"}
        component={AllListingNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo color={color} size={30} name="list" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={routes.NEW_LISTING}
        component={NewListingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              color={color}
              size={30}
              name="plus-square"
              style={{ marginVertical: 30 }}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather color={color} size={30} name="bell" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />

      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather color={color} size={30} name="user" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
