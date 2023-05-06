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

const ReceipeCard = ({ item, index, navigate }: any) => {
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
              Cuisine Type: {item?.recipe?.cuisineType[0]}
            </Text>
          </View>
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
    textAlign: "center",
  },
  itemListingBodyText: {
    color: Colors.PRIMARY,
    fontSize: hp(12),
    paddingTop: hp(5),
    textTransform: "capitalize",
    textAlign: "center",
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
    borderRadius: 20,
    borderColor: Colors.PRIMARY,
    marginTop: hp(20),
    height: hp(180),
  },
  image: {
    height: hp(300),
    width: "100%",
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
