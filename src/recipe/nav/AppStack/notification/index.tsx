import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight} from 'react-native';
import ButtonComponent from '../../../components/button';
import TextFieldComponent from '../../../components/textField';

const NotificationScreen = () => {
    return(
        <View style={styles.bg}>
            <View style={styles.topWrapper}>
                <View style={{flex: .9,}}>
                    <Text style={styles.bigText}>
                        Hello Jega,
                    </Text>
                    <Text style={styles.smallText}>
                        What are you cooking today?
                    </Text>
                </View>
                <Image style={{flex: .1, justifyContent: 'center'}} source={require('../../../../img/ic_avatar.png')}/>
                
            </View>

            <View style={styles.bottomWrapper}>
                <TextFieldComponent
                hasLabel={false}
                hasIcon={false}
                label='Email'
                placeHolder='Enter Email'
                style={styles.textField}
                onChangeText={() => {/*state manipulation*/}}/>

                <ButtonComponent
                    style={styles.button}
                    name='Sign In'
                    onButtonClick={() => console.log("here...")}
                />
                
                
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
        flex: .1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      bottomWrapper:{
        flex: .9,
        width: '100%',
        alignItems: 'center'
      },
      smallText:{
        color: '#A9A9A9',
        fontSize: 12,
        marginTop: 14,
        marginBottom: 10,
      },
      bigText:{
        color: 'black',
        fontSize: 35,
        marginTop: 14,
      },
      textField: {
        marginTop: 10,
        width:'50%',
      },
      button: {
        width: '100%'
      },
})

export default NotificationScreen