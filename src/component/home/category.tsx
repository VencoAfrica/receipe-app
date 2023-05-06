import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import { Colors } from "../../styles";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ category, setSelectedCategory }: any) => {
  const [indexCheck, setIndexCheck] = useState<number>(1);

  return (
    <View>
      <View style={styles.receipeListingsHeaderContainer}>
        <Text style={styles.receipeHeaderText}>Category</Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingLeft: 20 }}
        data={category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              setIndexCheck(item.id);
              setSelectedCategory(item.item);
            }}
          >
            <View
              style={
                indexCheck === item.id
                  ? { ...styles.categoryContainer }
                  : { ...styles.categoryContainerSelected }
              }
            >
              <View style={styles.categoryDetails}>
                <Text
                  style={
                    indexCheck === item.id
                      ? { color: Colors.WHITE }
                      : { color: Colors.PRIMARY }
                  }
                >
                  {item.item}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  receipeListingsHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  receipeHeaderText: {
    color: Colors.DARK,
    fontWeight: "700",
    fontSize: hp(14),
  },
  categoryContainer: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(20),
    height: hp(40),
    marginRight: wp(20),
    marginVertical: hp(10),
  },
  categoryContainerSelected: {
    backgroundColor: Colors.GREY_4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(20),
    height: hp(40),
    marginRight: wp(20),
    marginVertical: hp(10),
  },
  categoryDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    paddingVertical: 10,
  },
});

export default Category;
