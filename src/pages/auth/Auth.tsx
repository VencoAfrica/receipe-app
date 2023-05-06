import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import Login from './Login';
import { View } from 'react-native';
import Register from './Register';

export interface AuthPages {
  SplashScreen: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    // @ts-ignore
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerBackVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerBackVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerBackVisible: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
