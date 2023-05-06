import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../utils/contants';
import { useEffect, useState } from 'react';

export interface FormGroupProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  value?: string;
  onChange?: (value: string) => void;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  ...props
}) => {
  return (
    <View style={{ gap: 5 }}>
      {label && <Text style={LabelStyle.default}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        style={InputStyle.default}
        secureTextEntry={type === 'password'}
        placeholderTextColor={COLORS.lightGray}
        {...props}
      />
    </View>
  );
};

export interface CheckboxProps {
  label?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  useEffect(() => {
    if (value !== undefined) {
      setIsChecked(value);
    }
  }, [value]);

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      onPress={handleOnChange}
    >
      <View
        style={[CheckboxStyle.default, isChecked ? CheckboxStyle.checked : {}]}
      >
        {isChecked && <View style={CheckboxTickStyle.default} />}
      </View>
      <Text style={CheckboxLabelStyle.default}>{label}</Text>
    </TouchableOpacity>
  );
};

const InputStyle = StyleSheet.create({
  default: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
    borderWidth: 1.5,
    color: COLORS.black,
    fontSize: 11,
    height: 55,
    paddingHorizontal: 20,
  },
});

const LabelStyle = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 21,
  },
});

const CheckboxStyle = StyleSheet.create({
  default: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    height: 20,
    width: 20,
  },
  checked: {
    backgroundColor: COLORS.secondary,
  },
});

const CheckboxTickStyle = StyleSheet.create({
  default: {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: COLORS.white,
    height: 5,
    width: 10,
    transform: [{ rotate: '-45deg' }, { translateX: -1 }, { translateY: 6 }],
    position: 'absolute',
  },
});

const CheckboxLabelStyle = StyleSheet.create({
  default: {
    color: COLORS.secondary,
    fontSize: 11,
  },
});
