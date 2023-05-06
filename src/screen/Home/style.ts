import { Platform, StyleSheet } from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  bodyContainer: {
    marginTop: hp(30),
    marginHorizontal: wp(21),
  },
  welcomeHeaderText: {
    fontSize: hp(24),
    color: Colors.DARK,
    lineHeight: hp(29),
  },
  welcomeBodyText: {
    color: Colors.GREY_5,
    fontSize: hp(15),
    lineHeight: hp(19),
  },
  searchContainer: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    bottom: 40,
    zIndex: 20,
    left: 20,
  },
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingLeft: 40,
    margin: 5,
    backgroundColor: "#FFFFFF",
    marginBottom: hp(30),
    marginTop: hp(20),
    borderRadius: 10,
  },
  receipeListingsContainer: {
    marginTop: hp(40),
  },
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
  contentContainerStyle: {
    marginTop: hp(15),
    alignItems: "center",
    justifyContent: "center",
  },
  itemBackgroundImage: {
    width: "100%",
    height: hp(250),
    borderRadius: 20,
  },
  emptyStateContainer: {
    paddingVertical: hp(100),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  emptyStateIcon: {
    width: wp(144),
    height: hp(100),
    textAlign: "center",
  },
  emptyStateText: {
    maxWidth: wp(189),
    fontSize: hp(16),
    paddingTop: hp(5),
    textAlign: "center",
    color: Colors.GREY_5,
    lineHeight: hp(19),
    fontWeight: "400",
  },
  itemListingContainer: {
    marginBottom: hp(20),
    marginHorizontal: wp(20),
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  itemListingText: {
    position: "absolute",
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
    borderRadius: 20,
    borderColor: Colors.PRIMARY,
    marginTop: hp(20),
    height: hp(180),
    marginRight: 10,
    marginBottom: 30,
  },
  image: {
    height: hp(200),
    width: wp(250),
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
