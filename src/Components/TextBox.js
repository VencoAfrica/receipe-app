import { View, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'


const TextBox = ({placeholder,icon,text,onChangeText}) => {
  return (
    <View style={styles.textB}>
    <Ionicons name={icon} size={20} color="#333333"  margin={4}/>
        <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        style={styles.txtbox}
        />
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
textB:{
  height:50,
  width:350,
  backgroundColor:COLORS.gray,
  flexDirection:'row',
  alignItems:'center',
  borderRadius:10,
  marginVertical:15
},
txtbox:{
  height:50,
  width:350,
}

})