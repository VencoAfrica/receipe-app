import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home";
import TabNav from "./TabNav";



const Stack = createStackNavigator();

const  MainStack = (navigation) =>{
  return (
    <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/> */}
          <Stack.Screen name="TabNav" component={TabNav} options={{headerShown:false}}/>


      
    </Stack.Navigator>
  );
}

export default MainStack
