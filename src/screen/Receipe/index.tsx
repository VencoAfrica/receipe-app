import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "./style";
import Header from "../../shared/header";
import Table from "../../component/receipe/table";

const Receipe = ({ navigation: { navigate, goBack }, route }: any) => {
  const receipe = route?.params?.receipe;

  return (
    <SafeAreaView style={styles.container}>
      <Header hasBackButton onPressLeftIcon={() => goBack()} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headtext}>{receipe?.recipe?.cautions[0]}</Text>

          <Image style={styles.image} source={{ uri: receipe.recipe.image }} />
          <View style={styles.cardInfo}>
            <Text style={styles.itemListingHeaderText}>
              {receipe?.recipe?.cautions[0]}
            </Text>
            <Text style={styles.itemListingBodyText}>
              Cuisine Type: {receipe?.recipe?.cuisineType[0]}
            </Text>
            <Text style={styles.itemListingBodyText}>
              Diet label: {receipe?.recipe?.dietLabels[0]}
            </Text>
            <Text style={styles.itemListingBodyText}>
              Calories: {receipe?.recipe?.calories}
            </Text>
          </View>

          <Table data={receipe?.recipe?.digest.slice(1, 5)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Receipe;
