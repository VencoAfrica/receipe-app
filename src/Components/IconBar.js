import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import {FONT,COLORS} from '../constant/theme'


const IconBar = () => {
  return (
    <View style={styles.bar}>
        <Entypo name="star" size={20} color="#FFC107" />
      <Text style={{fontFamily:FONT.regular}}>4.5</Text>
    </View>
  )
}

export default IconBar

const styles = StyleSheet.create({
    bar:{
        width:20,
        height:40
    }
})