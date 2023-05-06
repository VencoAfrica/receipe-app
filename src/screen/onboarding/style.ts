import { StyleSheet } from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  bodyContainer: {
    marginTop: hp(50),
    marginHorizontal: wp(24),
  },

  logo: {
    marginTop: hp(60),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: wp(60),
    height: hp(60),
  },
  onboardingTextContainer: {
    marginTop: hp(200),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "700",
  },
  mainBodyText: {
    opacity: 0.8,
  },
  onboardingBodyText: {
    lineHeight: hp(26),
    paddingTop: hp(20),
  },
  signature: {
    marginTop: hp(40),
    alignSelf: "flex-end",
    width: wp(112),
    height: hp(30),
  },
  contentContainerStyle: {
    marginTop: hp(42),
  },
  radioIcon: {
    width: wp(24),
    height: hp(24),
  },
  itemText: {
    paddingLeft: wp(8),

    fontSize: hp(14),
    color: Colors.WHITE_200,
  },
  activeItemText: {
    color: Colors.PRIMARY,
  },
  itemContainer: {
    width: wp(327),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE_100,
    marginBottom: hp(12),
    paddingHorizontal: wp(12),
    borderRadius: hp(32),
    height: hp(45),
  },
});
