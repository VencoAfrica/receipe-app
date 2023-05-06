import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import google from '../assets/Icons/google.png'
import facebook from '../assets/Icons/facebook.png'
import apple from '../assets/Icons/apple.png'

import {FONT,COLORS} from '../constant/theme'

const SocialIcons = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.box}>
        <Image source={google} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxf}>
        <Image source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxa}>
        <Image source={apple} />
        </TouchableOpacity>

    </View>
  )
}

export default SocialIcons

const styles = StyleSheet.create({
    container:{
    flexDirection:'row',
   marginVertical:25
},
    box:{
        height:40,
        width:40,
        borderWidth:1,
        borderColor:COLORS.black,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginHorizontal:15

    },
    boxf:{
        height:40,
        width:40,
        // borderWidth:1,
        borderColor:COLORS.black,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1976D2',
         borderRadius:10,
         marginHorizontal:10

    
    },
    boxa:{
        height:40,
        width:40,
        // borderWidth:1,
        borderColor:COLORS.black,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#333333',
        borderRadius:10,
        marginHorizontal:15


    }
})