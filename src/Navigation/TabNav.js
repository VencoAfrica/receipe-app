import React from "react"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { COLORS } from "../constant/theme";


const Tab = createBottomTabNavigator();

const  TabNav = (navigation) =>{
  return (
     <Tab.Navigator
     initialRouteName="Home"
     screenOptions={{
    activeTintColor: COLORS.green,
    inactiveTintColor: COLORS.gray,
    tabBarActiveTintColor: COLORS.black,
    tabBarInactiveTintColor: COLORS.black,
  }}
     >
       
      <Tab.Screen name="Home" component={Home} options={{
      // title: "Home",
      
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={30} color={focused? COLORS.green :COLORS.gray} />   }}
      />
       <Tab.Screen name="Favourite" component={Home} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="ios-heart-outline" size={30} color={focused? COLORS.green :COLORS.gray}/>   }}
      /> 
     
      <Tab.Screen name="Profile" component={Home} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <MaterialCommunityIcons name="account-circle-outline" size={30} color={focused? COLORS.green :COLORS.gray}/> }}
      /> 
    </Tab.Navigator>
  );
}

export default TabNav
