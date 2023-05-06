import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { hp } from "./src/shared/responsive-dimension";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <FlashMessage
          position="top"
          style={styles.flashTextStyle}
          duration={4500}
          titleStyle={styles.titleStyle}
        />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: "center",
    color: "#fff",

    fontSize: 14,
  },
  flashTextStyle: {
    paddingTop: hp(20),
    zIndex: 10000,
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
