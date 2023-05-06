import { Platform, StyleSheet } from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  bodyContainer: {
    marginTop: hp(20),
    marginHorizontal: wp(21),
  },
  headtext: {
    fontSize: hp(30),
    fontWeight: "700",
    color: Colors.DARK,
    lineHeight: hp(29),
  },
  receipeListingsContainer: {
    marginTop: hp(20),
  },
  searchContainer: {
    position: "relative",
  },
  image: {
    marginTop: hp(20),
    height: hp(200),
    borderRadius: 20,
    margin: "auto",
  },
  cardInfo: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: hp(20),
  },
  itemListingBodyText: {
    color: Colors.PRIMARY,
    fontSize: hp(16),
    marginTop: hp(10),
    textTransform: "capitalize",
    textAlign: "center",
  },
  itemListingHeaderText: {
    color: Colors.PRIMARY,
    fontSize: hp(20),
    lineHeight: hp(19),
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center",
  },
});
