import { useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface ButtonProps {
  colorScheme?: 'green';
  icon?: React.ReactNode;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: StyleProp<ViewStyle>;
  text?: string;
  onPress?: () => void;
}

const ButtonStyle = StyleSheet.create({
  default: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'center',
    textAlign: 'center',
  },
  rounded: {
    borderRadius: 999,
  },
  green: {
    backgroundColor: '#129575',
  },
  md: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  lg: {
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 50,
  },
});
const TextStyle = StyleSheet.create({
  default: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  green: {
    color: '#fff',
  },
});

export const Button: React.FC<ButtonProps> = ({
  colorScheme = 'green',
  icon,
  size = 'md',
  rounded = false,
  text,
  style = {},
  ...props
}) => {
  const buttonTheme = useMemo(() => {
    let theme = { ...ButtonStyle[colorScheme], ...ButtonStyle[size] };
    if (rounded) {
      theme = { ...theme, ...ButtonStyle.rounded };
    }
    return theme;
  }, [colorScheme]);
  const textTheme = useMemo(() => TextStyle[colorScheme], [colorScheme]);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{ ...ButtonStyle.default, ...buttonTheme, ...(style as any) }}
      {...props}
    >
      <Text style={{ ...TextStyle.default, ...textTheme }}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};
