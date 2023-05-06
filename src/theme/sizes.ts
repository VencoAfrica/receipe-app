import Metrics from './metrics';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const FONTSIZE = {
  font6: RFValue(6),
  font8: RFValue(8),
  font10: RFValue(10),
  font12: RFValue(12),
  font14: RFValue(14),
  font16: RFValue(16),
  font18: RFValue(18),
  font20: RFValue(20),
  font22: RFValue(22),
  font24: RFValue(24),
  font26: RFValue(26),
  font28: RFValue(28),
  font30: RFValue(30),
  font32: RFValue(32),
  font34: RFValue(34),
  font36: RFValue(36),
};
export const FONT_WEIGHT = {
  thin: '100',
  light: '200',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  veryBold: '900',
};
export const SCREEN_SIZE = {
  statusBar: StatusBar.currentHeight || 20,
  fixedHeight: Metrics.fixedHeight,
  fixedWidth: Metrics.fixedWidth,
  width: Metrics.screenWidth,
  height: Metrics.screenHeight,
  padding: Metrics.screenWidth / 20,
  paddingSmall: Metrics.screenWidth / 30,
  paddingLarge: Metrics.screenWidth / 10,
  paddingXL: Metrics.screenWidth / 5,
  imageHeight: Metrics.imageHeight,
};
export const FONT_FAMILY = {
  // FONTS TO BE ADDED LATER
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
};

export function RFValue(fontSize: number, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;
  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset!
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
