import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const BigButtonWhite = ({title,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default BigButtonWhite

const styles = StyleSheet.create({
container:{
    height:72,
    width:350,
    borderRadius:10,
    backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#037F00",
    margin:15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
   
},
Txt:{
  // fontSize:14,
fontFamily:FONT.semiBold,
color:COLORS.green
}
})