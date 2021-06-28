import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
//import exchangerequests from "../screens/exchangerequests";
import BookRequestScreen from "../screens/RequestsScreen";
import { AppStackNavigator } from "./AppStackNavigator";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/home.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
      tabBarLabel: "Home",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/exchange.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
      tabBarLabel: "Exchange",
    },
  },
});
