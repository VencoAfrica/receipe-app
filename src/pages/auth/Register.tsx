import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Container from '../../components/container';
import { Checkbox, FormGroup } from '../../components/form';
import { COLORS } from '../../../utils/contants';
import { Button } from '../../components/button';
import { ArrowRight } from '../../components/icons';
import { SocialLogin } from '../../components/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthPages } from './Auth';

export default function Register({
  navigation,
}: // @ts-ignore
NativeStackScreenProps<AuthPages, 'Register'>) {
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
          <Text style={{ fontSize: 20, fontWeight: '600', lineHeight: 45 }}>
            Create an account
          </Text>
          <Text style={{ fontSize: 11, lineHeight: 16 }}>
            Let&apos;s help you set up your account,{'\n'}it won&apos;t take
            long.
          </Text>
        </View>
        <View style={{ gap: 30, marginBottom: 20 }}>
          <FormGroup label="Name" placeholder="Enter Name" />
          <FormGroup label="Email" placeholder="Enter Email" />
          <FormGroup
            label="Enter Password"
            placeholder="Enter Password"
            type="password"
          />
          <FormGroup
            label="Confirm Password"
            placeholder="Retype Password"
            type="password"
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <Checkbox label="Accept terms & Condition" />
        </View>
        <Button
          icon={<ArrowRight fill="white" />}
          size="lg"
          text="Sign Up"
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
          onPress={() => navigation.navigate('Login')}
        >
          Already a member?{' '}
          <Text style={{ color: COLORS.secondary }}>Sign In</Text>
        </Text>
      </ScrollView>
    </Container>
  );
}
