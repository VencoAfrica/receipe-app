import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export default function Container({
  children,
  style = {},
}: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingBottom: 16,
        paddingTop: 64,
        ...(style as any),
      }}
    >
      {children}
    </View>
  );
}
