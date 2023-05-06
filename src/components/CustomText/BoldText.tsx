import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTSIZE} from '../../theme/sizes';
import {COLORS} from '../../theme/colors';

type Props = React.ComponentProps<typeof Text>;

export const BoldText: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.font18,
    fontWeight: 'bold',
  },
});
