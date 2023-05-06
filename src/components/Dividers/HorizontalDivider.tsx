import {View} from 'react-native';
import { COLORS } from "../../theme/colors";

interface Props {
  width?: any;
  height?: any;
  color?: any;
}

export const HorizontalDivider = ({
  width = '100%',
  height = 2,
  color,
}: Props) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color ?? COLORS.chipStroke,
      }}
    />
  );
};
