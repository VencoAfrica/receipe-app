import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, FlatList} from 'react-native';
import ButtonComponent from '../../../components/button';
import TextFieldComponent from '../../../components/textField';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {

    const data = ['All', 'Indian', 'Italian', 'Chinese']
    return(
        <View style={styles.bg}>
            <View style={styles.topWrapper}>
                <View style={{flex: .9, justifyContent: 'center'}}>
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
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <TextFieldComponent
                    hasLabel={false}
                    hasIcon={false}
                    placeHolder='Search Recipe'
                    style={styles.textField}
                    onChangeText={() => {/*state manipulation*/}}/>

                    <ButtonComponent
                        style={styles.button}
                        name='Filter'
                        onButtonClick={() => console.log("here...")}
                    />
                </View>

                <View style={{alignItems: 'center', marginTop: 70}} >
                    <View style={{borderRadius: 10, height: 176, width: 150, backgroundColor: '#D9D9D9', alignItems: 'center'}}>
                        <Text style={{marginTop: 75}}>Classic Greek Salad</Text>
                    </View>
                    <View >
                        <View>
                            <Text>
                                Time
                            </Text>
                            <Text>
                                15 Mins
                            </Text>

                        </View>
                    </View>
                    <View style={{borderRadius: 55, height: 110, width: 110, backgroundColor: '#D7D7D7', top: -250}}>
                        <Image source={require('../../../../img/ic_recipe_sample.png')} resizeMode='contain'
                        style={{borderRadius: 55, height: 117, width: 110, backgroundColor: '#D7D7D7'}}/>
                    </View>
                </View>

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
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      bottomWrapper:{
        flex: .9,
        width: '100%',
        alignItems: 'flex-start',
      },
      smallText:{
        color: '#A9A9A9',
        fontSize: 12,
        marginTop: 9,
        marginBottom: 10,
      },
      bigText:{
        color: 'black',
        fontSize: 35,
      },
      textField: {
        marginTop: 10,
        flex: .7,
      },
      button: {
        flex: .3,
        marginStart: 10,
        height: 40,
        paddingVertical: 10,
      },
})

export default HomeScreen