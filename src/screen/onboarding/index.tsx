import React from "react";
import { Image, View, Button, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { SharedImages } from "../../styles/images";
import LongButton from "../../shared/long-button";
import { Colors } from "../../styles";
import { hp } from "../../shared/responsive-dimension";

const Onboarding = ({ navigation: { navigate, goBack }, route }: any) => {
  return (
    <View>
      <ImageBackground
        source={SharedImages.background}
        style={{ height: "100%" }}
      >
        <View style={styles.bodyContainer}>
          <View style={styles.logo}>
            <Image
              source={SharedImages.logo}
              resizeMode="contain"
              style={styles.logoIcon}
            />
            <Text style={{ color: Colors.WHITE, fontSize: 20 }}>
              100K+ Premium Recipe{" "}
            </Text>
          </View>

          <View style={styles.onboardingTextContainer}>
            <Text
              style={{ color: Colors.WHITE, fontSize: 50, fontWeight: "700" }}
            >
              Get Cooking
            </Text>
            <Text style={{ color: Colors.WHITE, fontSize: 20, marginTop: 20 }}>
              Simple way to find Tasty Recipe
            </Text>

            <LongButton
              title="Start Cooking"
              buttonStyle={{
                marginTop: hp(100),
              }}
              onPress={() => navigate("Home")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
