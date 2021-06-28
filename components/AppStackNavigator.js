import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import exchangerequests from '../screens/HomeScreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList: {
    screen: exchangerequests,
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
