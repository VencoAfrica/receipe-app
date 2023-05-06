import {COLORS} from '../theme/colors';
import {StyleSheet, Pressable, TextInput, View} from 'react-native';
import {FONTSIZE} from '../theme/sizes';
import CustomImage from "./CustomImage";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {HorizontalSpacer} from "./Spacers/HorizontalSpacer";

interface IProps {
    leftIcon?: boolean;
  btnTitle?: string;
  containerStyle?: any;
  placeholder?: string;
  onChangeText?: any;
  value?: string;
  showBtn?: boolean;
  onPress?: any;
  callToSearch?: any;
}

export const SearchBar = ({
  leftIcon = true,
  containerStyle,
  value,
  onChangeText,
  placeholder,
  showBtn = true,
  onPress,
  callToSearch
}: IProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon && (<Feather name="search" size={24} color={COLORS.gray3} />)}
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={{
            width: '60%',
            fontSize: FONTSIZE.font12,
            marginLeft: 8,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray4}
          onEndEditing={callToSearch}
        />
      </View>
      <HorizontalSpacer />
      {showBtn && (
        <Pressable
          onPress={onPress}
          style={styles.btnRight}>
            <FontAwesome name="sliders" size={24} color={COLORS.white} />
        </Pressable>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    inputContainer:   {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.inputBorder,
        width: '100%',
        height: 48,
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    btnRight:{
        padding: 12,
        borderRadius: 8,
        margin: 4,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
