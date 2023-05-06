import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './Home';
import Recipes from './Recipes';
import Header from '../../modules/header';
import Container from '../../components/container';

export interface ApplicationPages {
  Home: undefined;
  Recipes: undefined;
}

const Stack = createNativeStackNavigator();

export default function Application() {
  return (
    // @ts-ignore
    <View style={{ flex: 1 }}>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
