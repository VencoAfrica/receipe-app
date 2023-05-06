import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { getBottomSpace, hp, wp } from "../responsive-dimension";
import { Colors } from "../../styles";

interface LongButtonProps {
  loading?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  isNotBottom?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  titleColor?: string;
}

const LongButton = ({
  onPress,
  loading,
  title,
  titleStyle,
  buttonStyle,
  containerStyle,
  disabled,
  isNotBottom,
  backgroundColor,
  titleColor,
}: LongButtonProps) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonStyle,
          buttonStyle,
          {
            backgroundColor: disabled
              ? Colors.DISABLED
              : backgroundColor || Colors.PRIMARY,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator size="small" color={Colors.WHITE} />
        ) : (
          <Text
            style={[
              styles.title,
              titleStyle,
              { color: disabled ? "#000" : titleColor || Colors.WHITE },
            ]}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    color: Colors.WHITE,
    fontSize: hp(16),
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "700",
  },
  buttonStyle: {
    height: hp(60),
    width: wp(327),
    backgroundColor: Colors.PRIMARY,
    borderRadius: hp(15),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default LongButton;
