import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Container from '../../components/container';
import { FormGroup } from '../../components/form';
import { COLORS } from '../../../utils/contants';
import { Button } from '../../components/button';
import { ArrowRight } from '../../components/icons';
import { SocialLogin } from '../../components/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthPages } from './Auth';

export default function Register({
  navigation,
}: // @ts-ignore
NativeStackScreenProps<AuthPages, 'Login'>) {
  return (
    <Container style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'stretch',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <StatusBar style="auto" />
        <View style={{ marginBottom: 60 }}>
          <Text style={{ fontSize: 30, fontWeight: '600', lineHeight: 45 }}>
            Hello,
          </Text>
          <Text style={{ fontSize: 20, lineHeight: 30 }}>Welcome Back!</Text>
        </View>
        <View style={{ gap: 30, marginBottom: 20 }}>
          <FormGroup label="Email" placeholder="Enter Email" />
          <FormGroup
            label="Enter Password"
            placeholder="Enter Password"
            type="password"
          />
        </View>
        <Text style={{ color: COLORS.secondary, marginBottom: 25 }}>
          Forgot Password?
        </Text>
        <Button
          icon={<ArrowRight fill="white" />}
          size="lg"
          text="Sign In"
          style={{ gap: 40 }}
        />
        <SocialLogin />
        <Text
          style={{
            fontSize: 11,
            fontWeight: '600',
            marginTop: 55,
            textAlign: 'center',
          }}
          onPress={() => navigation.navigate('Register')}
        >
          Don&apos;t have an account?{' '}
          <Text style={{ color: COLORS.secondary }}>Sign up</Text>
        </Text>
      </ScrollView>
    </Container>
  );
}
