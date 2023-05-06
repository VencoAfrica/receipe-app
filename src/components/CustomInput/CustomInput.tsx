import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput as BaseInput,
  Pressable,
} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONTSIZE, SCREEN_SIZE} from '../../theme/sizes';
import CustomText from '../CustomText/CustomText';
import {VerticalSpacer} from '../Spacers/VerticalSpacer';
// Component Props
interface CustomProps {
  validateInput?: (input: string) => boolean;
  label?: string;
  inputStyle?: object;
  labelStyle?: object;
  editable?: boolean;
  isMultiline?: boolean;
  multilineHeight?: any;
  placeholderTextColor?: string;
  rightIcon?: any | null;
  isPassword?: boolean;
  inputContainerStyle?: object;
  onRightIconClicked?: () => void;
}

type InputProps = React.ComponentProps<typeof BaseInput> & CustomProps;

// Custom CustomInput Component
const CustomInput: React.FC<InputProps> = ({
  value: text,
  label,
  labelStyle,
  isMultiline,
  multilineHeight,
  onChangeText,
  keyboardType,
  style,
  inputStyle,
  editable = true,
  rightIcon,
  onRightIconClicked,
  isPassword = false,
  placeholderTextColor,
  inputContainerStyle,
  ...props
}) => {
  // pointer to input element
  const inputRef = useRef<any>(null);
  // track invalid input
  /*  const [invalidInput, setInvalidInput] = useState(false);

      /!* ---- onFocus ---- *!/
      const afterFocus = useCallback((event: any) => {
          // change border color and elevation
          inputRef.current.setNativeProps({
              style: {
                  borderColor: COLORS.primary,
                  elevation: 2,
                  shadowOpacity: 0.4,
              },
          });
          // clear error warnings
          //setInvalidInput(false);
          // Run props.onFocus if provided
          if (onFocus) onFocus(event);
      }, []);

      /!* ---- onBlur ---- *!/
      const afterBlur = useCallback((event: any) => {
          // reduce elevation
          inputRef.current.setNativeProps({
              style: {
                  elevation: 0,
                  shadowOpacity: 0,
              },
          });
          // Run props.onBlur if provided
          if (onBlur) onBlur(event);
      }, []);

      /!* ---- onEndEditing ---- *!/
      const checkError = useCallback((event: any) => {
          // check for errors
          let error = false;
          if (validateInput !== undefined) {
              error = !validateInput(event.nativeEvent.text);
              error ? setInvalidInput(true) : setInvalidInput(false);
          }
          // change border color if error
          inputRef.current.setNativeProps({
              style: {
                  borderColor: error ? COLORS.error : COLORS.white,
              },
          });
      }, []);*/

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.wrapper, style]}>
      {label && <CustomText style={labelStyle}>{label}</CustomText>}
      <VerticalSpacer height={2} />
      <View
        style={[
          {
            flexDirection: 'row',
            width: '100%',
            height: isMultiline ? multilineHeight ?? 120 : 48,
            backgroundColor: COLORS.white,
            borderRadius: 20,
          },
          inputContainerStyle,
        ]}>
        <BaseInput
          ref={inputRef}
          value={text}
          editable={editable}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor={placeholderTextColor ?? COLORS.foregroundWhite}
          selectionColor="#D6F5FD"
          multiline={isMultiline}
          style={[
            styles.input,
            {
              height: isMultiline ? multilineHeight ?? 120 : 48,
              textAlignVertical: isMultiline ? 'top' : 'center',
              paddingVertical: isMultiline ? 8 : 1,
              flex: 1,
            },
            inputStyle,
          ]}
          keyboardType={keyboardType || 'default'}
          {...props}
        />
        {rightIcon && (
          <Pressable onPress={onRightIconClicked} style={styles.rightIcon}>
            {rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: SCREEN_SIZE.width * 0.9,
    maxWidth: '100%',
  },
  input: {
    width: '100%',
    fontSize: FONTSIZE.font16,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: COLORS.inputBg,
    color: COLORS.white,
    borderRadius: 8,
  },
  rightIcon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingRight: 10,
    paddingLeft: 4,
    borderRadius: 20,
  },
});

export default CustomInput;
