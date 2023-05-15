import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import ButtonComponent from '../../../components/button';

const SplashScreen = () => {

    
    return(
        <ImageBackground source={require('../../../../img/ic_splash_background.png')}
        resizeMode="cover" style={styles.bg}>
            <View style={styles.topWrapper}>
                <Image source={require('../../../../img/ic_splash.png')} 
                resizeMode='contain'/>
                <Text style={styles.smallText}>
                    100K+ Premium Recipe 
                </Text>
            </View>

            <View style={styles.bottomWrapper}>
                <Text style={styles.bigText}>
                    Get Cooking
                </Text>
                <Text style={styles.smallText}>
                    Simple way to find Tasty Recipe
                </Text>
                <ButtonComponent
                    style={styles.button}
                    name='Start Cooking'
                    onButtonClick={() => console.log("here...")}
                />
            </View>
            

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        // justifyContent: 'center',
      },
      topWrapper: {
        flex: .4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      bottomWrapper:{
        flex: .6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      smallText:{
        color: 'white',
        fontSize: 18,
        marginTop: 14,
      },
      bigText:{
        color: 'white',
        fontSize: 50,
        marginTop: 14,
      },
      button: {
        width:'50%',
      }
})

export default SplashScreen