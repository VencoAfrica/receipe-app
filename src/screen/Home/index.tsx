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
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { SharedImages } from "../../styles";
import { Colors } from "../../styles";
import ReceipeCard from "../../component/home/receipeCard";
import Category from "../../component/home/category";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation: { navigate, goBack }, route }: any) => {
  const [search, setSearch] = useState<any>("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const category: any = [
    { id: 1, item: "All" },
    { id: 2, item: "italian" },
    { id: 3, item: "french" },
    { id: 4, item: "american" },
  ];
  const {
    Receipe: { getReceipeByQuantity, getReceipeBycuisineType, searchReceipe },
  } = useDispatch();

  useEffect(() => {
    getReceipeByQuantity({ quantity: "10" });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      getReceipeByQuantity({ cuisineType: "10" });
    } else {
      getReceipeBycuisineType({ cuisineType: selectedCategory });
    }
  }, [selectedCategory]);

  const { receipes, loading }: any = useSelector(
    (state: RootState) => state.Receipe
  );

  const renderItem = ({ item }: any) => (
    <ReceipeCard item={item} navigate={navigate} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.welcomeHeaderText}>Hi Jega,</Text>
            <Text style={styles.welcomeBodyText}>
              Welcome Back, time to inspect.
            </Text>
          </View>

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
              onChangeText={(text) => {
                setSearch(text);
                searchReceipe(text, receipes);
              }}
              value={search}
            />
          </View>

          <Category
            category={category}
            setSelectedCategory={setSelectedCategory}
          />

          <View style={styles.receipeListingsContainer}>
            <View style={styles.receipeListingsHeaderContainer}>
              <Text style={styles.receipeHeaderText}>Favorite Receipe</Text>

              <TouchableOpacity
                style={styles.view}
                onPress={() => navigate("Receipes", { receipes })}
              >
                <Text>View More </Text>
                <Image
                  source={SharedImages["arrow-right"]}
                  resizeMode="contain"
                  style={styles.arrowRight}
                />
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={receipes.slice(1, 5)}
                horizontal={true}
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
            )}
          </View>

          <View style={styles.receipeListingsContainer}>
            <View style={styles.receipeListingsHeaderContainer}>
              <Text style={styles.receipeHeaderText}>Available Receipe</Text>

              <TouchableOpacity style={styles.view}>
                <Text>View More </Text>
                <Image
                  source={SharedImages["arrow-right"]}
                  resizeMode="contain"
                  style={styles.arrowRight}
                />
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={receipes.slice(1, 5)}
                horizontal={true}
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
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
