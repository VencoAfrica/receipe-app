import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../../theme/colors';
import CustomText from '../CustomText/CustomText';
import {FONTSIZE, SCREEN_SIZE} from '../../theme/sizes';

interface Props {
  onPress: () => void;
  btnTitle: string;
  style?: object;
  titleStyle?: object;
  children?: React.ReactNode;
}

const SmallButton: React.FC<Props> = ({
  onPress,
  style,
  btnTitle,
  titleStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnContainer, style]}>
      <CustomText style={[styles.btnTitleStyle, titleStyle]}>
        {btnTitle}
      </CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: SCREEN_SIZE.width * 0.35,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  btnTitleStyle: {
    color: COLORS.white,
    fontSize: FONTSIZE.font16,
  },
});
export default SmallButton;
