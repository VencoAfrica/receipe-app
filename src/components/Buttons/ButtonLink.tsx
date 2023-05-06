import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONTSIZE} from '../../theme/sizes';

interface Props {
  textStyle?: object;
  style?: object;
  text?: string;
  onPress: () => void;
}

const ButtonLink: React.FC<Props> = ({text, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={style}>
      <Text style={{...styles.text, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.primaryYellow,
    fontSize: FONTSIZE.font16,
    textDecorationLine: 'underline',
  },
});

export default ButtonLink;
