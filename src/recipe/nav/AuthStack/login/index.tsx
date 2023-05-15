import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight} from 'react-native';
import ButtonComponent from '../../../components/button';
import TextFieldComponent from '../../../components/textField';

const LoginScreen = () => {
    return(
        <View style={styles.bg}>
            <View style={styles.topWrapper}>
                <Text style={styles.bigText}>
                    Hello,
                </Text>
                <Text style={styles.smallText}>
                    Welcome Back!
                </Text>
            </View>

            <View style={styles.bottomWrapper}>
                <TextFieldComponent
                hasLabel={true}
                hasIcon={false}
                label='Email'
                placeHolder='Enter Email'
                style={styles.textField}
                onChangeText={() => {/*state manipulation*/}}/>

                <TextFieldComponent
                hasLabel={true}
                hasIcon={false}
                label='Password'
                placeHolder='Enter Passwood'
                style={styles.textField}
                onChangeText={() => {/*state manipulation*/}}/>

                <ButtonComponent
                    style={styles.button}
                    name='Sign In'
                    onButtonClick={() => console.log("here...")}
                />

                <View style={{alignItems: 'center', width: '100%', marginTop: 20}}>
                  <View style={{
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}/>
                  <Text>Or Sign in With</Text>
                  <View style={{
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableHighlight>
                    <Image source={require('../../../../img/ic_google.png')}/>
                  </TouchableHighlight>
                  <TouchableHighlight>
                    <Image source={require('../../../../img/ic_facebook.png')}/>
                  </TouchableHighlight>
                </View>
                <TouchableHighlight>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Already a member? </Text>
                    <TouchableHighlight>
                      <Text style={{color: '#FF9C00'}}>Sign In</Text>
                    </TouchableHighlight>
                  </View>
                </TouchableHighlight>
                
                
            </View>

            
        </View>
        
    );
}

const styles = StyleSheet.create({
    bg: {
      flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        padding: 20,
      },
      topWrapper: {
        flex: .2,
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      bottomWrapper:{
        flex: .8,
        width: '100%',
        alignItems: 'center'
      },
      smallText:{
        color: 'black',
        fontSize: 20,
        marginTop: 14,
      },
      bigText:{
        color: 'black',
        fontSize: 50,
        marginTop: 14,
      },
      textField: {
        width:'50%',
      },
      button: {
        width: '100%'
      },
})

export default LoginScreen