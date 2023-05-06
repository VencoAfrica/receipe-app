import React from 'react';
import {Text} from 'react-native';
import {FONTSIZE} from '../../theme/sizes';
import {COLORS} from '../../theme/colors';

const fontSizes = {
  h1: FONTSIZE.font30,
  h2: FONTSIZE.font26,
  h3: FONTSIZE.font22,
  h4: FONTSIZE.font18,
  h5: FONTSIZE.font14,
  h6: FONTSIZE.font10,
};

interface CustomProps {
  variant: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  style?: object;
  children: React.ReactNode;
}
type Props = React.ComponentProps<typeof Text> & CustomProps;

const HeaderText: React.FC<Props> = ({style, children, variant, ...props}) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: fontSizes[variant],
          fontWeight: '700',
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default HeaderText;
