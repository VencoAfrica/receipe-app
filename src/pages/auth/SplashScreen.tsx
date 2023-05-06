import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  // NativeModules,
  // Platform,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '../../components/button';
import { AuthPages } from './Auth';
import { ArrowRight } from '../../components/icons';

export default function SplashScreen(
  // @ts-ignore
  { navigation }: NativeStackScreenProps<AuthPages, 'SplashScreen'>
) {
  // const { StatusBarManager } = NativeModules;
  // const STATUSBAR_HEIGHT =
  //   Platform.OS === 'ios' ? 20 : StatusBarManager?.HEIGHT;

  // const HALF_OF_SCREEN = Dimensions.get('screen').height * 0.5;

  const start = () => navigation.navigate('Login');
  
  return (
    <ImageBackground
      source={require('../../../assets/splash1.png')}
      style={{ height: Dimensions.get('screen').height, flex: 1 }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingBottom: 84,
          paddingTop: 104,
          paddingHorizontal: 32,
        }}
      >
        <View style={{ gap: 14 }}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../../assets/chef-hat.png')}
              style={{ height: 80, width: 80 }}
            />
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            100k+ Premium Recipes
          </Text>
        </View>
        <View style={{ alignItems: 'center', gap: 64 }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: 32,
            }}
          >
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 50,
                  fontWeight: '600',
                  lineHeight: 60,
                  textAlign: 'center',
                }}
                adjustsFontSizeToFit
                allowFontScaling
              >
                Get{'\n'}Cooking
              </Text>
            </View>
            <Text
              allowFontScaling
              style={{
                color: '#fff',
                fontSize: 18,
                lineHeight: 24,
                textAlign: 'center',
              }}
            >
              Simple way to find a Tasty Recipe
            </Text>
          </View>
          <View>
            <Button
              icon={<ArrowRight fill='white' />}
              style={{ width: 250 }}
              text="Start Cooking"
              onPress={start}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
