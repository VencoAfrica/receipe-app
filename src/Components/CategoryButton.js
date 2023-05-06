import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const CatButtons = ({title,onPress,extContStyle,exttxtStyle}) => {
    
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.container, extContStyle]}>
      <Text style={[styles.Txt,exttxtStyle]}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default CatButtons

const styles = StyleSheet.create({
container:{
    height:34,
    width:100,
    borderRadius:10,
    backgroundColor:COLORS.green,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#037F00",
    marginVertical:15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
   
},
Txt:{
  fontSize:14,
color:COLORS.white
}
})