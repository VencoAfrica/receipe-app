import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import TabNav from './src/Navigation/TabNav';
import MainStack from './src/Navigation/MainStack';
import { Provider } from "react-redux"
import store from './src/redux/store';
// import store from "./redux/store"



export default function App() {
 

    return (
      <Provider store={store}>
           <NavigationContainer>

            <MainStack/>

         <StatusBar style="auto" />
            </NavigationContainer> 

      </Provider>
  
            
          
      
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


