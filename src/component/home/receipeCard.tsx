import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "../../styles";
import { hp, wp } from "../../shared/responsive-dimension";
import { MaterialIcons } from "@expo/vector-icons";

const ReceipeCard = ({ item, index, navigate }: any) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <TouchableOpacity
      key={index}
      style={[styles.itemListingContainer]}
      onPress={() => navigate("Receipe", { receipe: item })}
    >
      <View style={styles.cardView}>
        <Image style={styles.image} source={{ uri: item.recipe.image }} />
        <View style={styles.cardInfo}>
          <View>
            <Text style={styles.itemListingHeaderText}>
              {item?.recipe?.cautions[0]}
            </Text>
            <Text style={styles.itemListingBodyText}>
              Cuisine Type:{" "}
              <Text style={styles.itemListingBodyText}>
                {item?.recipe?.cuisineType[0]}
              </Text>
            </Text>
            <Text style={styles.itemListingBodyText}>
              Calories:{" "}
              <Text style={styles.itemListingBodyText}>
                {item?.recipe?.calories}
              </Text>
            </Text>
          </View>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {favorite ? (
              <MaterialIcons name="favorite" size={30} color="red" />
            ) : (
              <MaterialIcons name="favorite" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemListingContainer: {
    marginBottom: hp(30),
    marginHorizontal: wp(20),
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  itemListingHeaderText: {
    color: Colors.PRIMARY,
    fontSize: hp(16),
    lineHeight: hp(19),
    fontWeight: "500",
    textTransform: "capitalize",
  },
  itemListingBodyText: {
    color: Colors.PRIMARY,
    fontSize: hp(12),
    paddingTop: hp(5),
    textTransform: "capitalize",
  },
  arrowRight: {
    width: wp(20),
    height: hp(20),
  },
  view: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  cardView: {
    // borderRadius: 20,
    // borderColor: Colors.PRIMARY,
    // marginTop: hp(20),
    // height: hp(180),
    // marginRight: 10,
    // marginBottom: 30,
  },
  image: {
    height: hp(200),
    width: wp(300),
    borderRadius: 20,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
export default ReceipeCard;
