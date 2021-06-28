import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/homescreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  RecieverDetails: {
    screen: RecieverDetailsScreen,
    navigationOptions: {
      headerShown: false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);
