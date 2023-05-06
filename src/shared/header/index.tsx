import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { deviceWidth, hp, wp } from "../responsive-dimension";
import { Colors, SharedImages } from "../../styles";

interface HeaderProps {
  onPressLeftIcon?: () => void;
  hasBackButton?: boolean;
  headerTitle?: string;
  hasBorderBottom?: boolean;
  tintColor?: string;
}

const Header = ({
  onPressLeftIcon,
  hasBackButton,
  headerTitle,
  hasBorderBottom,
  tintColor,
}: HeaderProps) => {
  const renderHeaderLeft = () => {
    if (hasBackButton) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.headerLeftIconContainer]}
          onPress={onPressLeftIcon}
        >
          <Image
            source={SharedImages["back-arrow"]}
            resizeMode="contain"
            style={[styles.backIcon, { tintColor }]}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return <Text style={[styles.headerTitle]}>{headerTitle}</Text>;
    }
  };

  return (
    <View style={[styles.headerContainer]}>
      <View
        style={[styles.navBar, hasBorderBottom && styles.borderBottomWidth]}
      >
        {renderHeaderLeft()}
        {renderHeaderTitle()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: wp(24),
    height: hp(24),
  },
  headerLeftIconContainer: {
    position: "absolute",
    left: wp(26),
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: Colors.WHITE,
    width: deviceWidth,
  },
  navBar: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    height: hp(55),
    marginTop: hp(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(20),
  },
  borderBottomWidth: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#F2F2F7",
  },
  headerTitle: {
    fontSize: hp(18),
    fontWeight: "700",
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.DARK,
  },
});

export default Header;
