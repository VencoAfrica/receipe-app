import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../../theme/colors';
import CustomText from '../CustomText/CustomText';
import {FONTSIZE, SCREEN_SIZE} from '../../theme/sizes';

interface Props {
  disabled?: boolean;
  onPress: () => void;
  btnTitle: string;
  btnStyle?: object;
  titleStyle?: object;
  btnIcon?: any;
  children?: React.ReactNode;
}

const ButtonPrimary: React.FC<Props> = ({
  onPress,
  btnStyle,
  btnTitle,
  titleStyle,
  btnIcon,
  disabled=false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btnContainer,
        {flexDirection: btnIcon ? 'row' : 'column'},
        btnStyle,
      ]}>
      {btnIcon ? btnIcon : null}
      <CustomText
        style={[
          styles.btnTitleStyle,
          {marginLeft: btnIcon ? 10 : 0},
          titleStyle,
        ]}>
        {btnTitle}
      </CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: SCREEN_SIZE.width * 0.8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryYellow,
    borderRadius: 12,
    alignSelf: 'center',
  },
  btnTitleStyle: {
    color: COLORS.foregroundDark,
    fontSize: FONTSIZE.font18,
    fontWeight: '600',
  },
});

export default ButtonPrimary;
