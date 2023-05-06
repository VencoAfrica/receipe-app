import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const SmallButton = ({title,onpress}) => {
  return (
    <TouchableOpacity
    onPress={onpress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default SmallButton

const styles = StyleSheet.create({
container:{
    height:75,
    width:215,
    borderRadius:10,
    backgroundColor:COLORS.green,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#037F00",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
   
},
Txt:{
fontFamily:FONT.semiBold,
color:COLORS.white
}
})