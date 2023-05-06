<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome VENCO React Native Hackathon</Text>
      <StatusBar style="auto" />
=======
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import Auth from './src/pages/auth/Auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Application from './src/pages/app/Application';

const Stack = createNativeStackNavigator();

export default function App() {
  const modifyNavigationBar = async () => {
    if (Platform.OS === 'android') {
      await NavigationBar.setBackgroundColorAsync('transparent');
      await NavigationBar.setPositionAsync('absolute');
    }
  };

  useEffect(() => {
    modifyNavigationBar();
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Application'>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Application" component={Application} />
        </Stack.Navigator>
      </NavigationContainer>
>>>>>>> b2c68a8 (Update)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image } from 'react-native';
// import { fetchRecipes } from './src/apis/testEdamamAPI';

// const RecipeListScreen = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       const data = await fetchRecipes('chicken');
//       setRecipes(data);
//     };
//     loadRecipes();
//   }, []);

//   const renderItem = ({ item }: any) => {
//     return (
//       <View>
//         <Image source={{ uri: item.recipe.image }} style={{ width: 100, height: 100 }} />
//         <Text>{item.recipe.label}</Text>
//         <Text>{item.recipe.calories}</Text>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <FlatList data={recipes} renderItem={renderItem} keyExtractor={(item: any) => item.recipe.uri} />
//     </View>
//   );
// };

// export default RecipeListScreen;
=======
  },
});
>>>>>>> b2c68a8 (Update)
