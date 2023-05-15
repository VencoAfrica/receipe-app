import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabNavigator from './AppStack';

const Stack = createStackNavigator();

const AppScreen = () => {
  return (
    <AppTabNavigator/>
  );
};

export default AppScreen;