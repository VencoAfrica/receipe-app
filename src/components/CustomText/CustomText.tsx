import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTSIZE} from '../../theme/sizes';
import {COLORS} from '../../theme/colors';

type Props = React.ComponentProps<typeof Text>;

const CustomText: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.font14,
    fontWeight: '400',
  },
});

export default CustomText;
