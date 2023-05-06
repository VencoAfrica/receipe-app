import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../utils/contants';
import { IconFacebook, IconGoogle } from './icons';

export const SocialLogin = () => {
  return (
    <View style={{ gap: 20, marginTop: 20 }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 7,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            borderTopColor: COLORS.lightGray,
            borderTopWidth: 1,
            width: 50,
          }}
        />
        <Text style={{ color: COLORS.lightGray, fontSize: 11 }}>
          Or Sign in With
        </Text>
        <View
          style={{
            borderTopColor: COLORS.lightGray,
            borderTopWidth: 1,
            width: 50,
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25 }}>
        <TouchableOpacity style={ButtonStyle.default}>
          <IconGoogle />
        </TouchableOpacity>
        <TouchableOpacity style={ButtonStyle.default}>
          <IconFacebook />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ButtonStyle = StyleSheet.create({
  default: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 44,
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: 44,
  },
});
