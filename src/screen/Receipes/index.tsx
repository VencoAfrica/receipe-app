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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { SharedImages } from "../../styles";
import { Colors } from "../../styles";
import ReceipeCard from "../../component/receipes/receipeCard";
import Category from "../../component/home/category";
import Header from "../../shared/header";
import { Ionicons } from "@expo/vector-icons";

const Receipes = ({ navigation: { navigate, goBack }, route }: any) => {
  const [search, setSearch] = useState("");
  //const receipes = route?.params?.receipes;
  //   const {
  //     Receipe: { getReceipeByQuantity },
  //   } = useDispatch();

  const {
    Receipe: { getReceipeByQuantity, searchReceipe },
  } = useDispatch();

  useEffect(() => {
    getReceipeByQuantity({ quantity: "10" });
  }, []);

  const receipes: any = useSelector(
    (state: RootState) => state.Receipe.receipes
  );

  const renderItem = ({ item }: any) => (
    <ReceipeCard item={item} navigate={navigate} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header hasBackButton onPressLeftIcon={() => goBack()} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headtext}>Receipes</Text>

          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={24}
              color="grey"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search receipe Here"
              style={styles.search}
              //  onChangeText={(text) => search(text)}
              value={search}
              onChangeText={(text) => {
                setSearch(text);
                searchReceipe(text, receipes);
              }}
            />
          </View>

          <View style={styles.receipeListingsContainer}>
            <View style={styles.receipeListingsHeaderContainer}>
              <Text style={styles.receipeHeaderText}>All Receipe</Text>
            </View>
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={receipes}
              renderItem={renderItem}
              ListEmptyComponent={() => {
                return (
                  <View style={styles.emptyStateContainer}>
                    <Image
                      source={SharedImages["empty-state"]}
                      resizeMode="contain"
                      style={styles.emptyStateIcon}
                    />
                    <Text style={styles.emptyStateText}>
                      No available Receipe at the moment
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Receipes;
