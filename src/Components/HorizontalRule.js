import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const HorizontalRule = () => {
  return (
    <View style={styles.container}>
        <View style={styles.rule}/>
      <Text style={styles.or}>or</Text>
        <View style={styles.rule}/>
    </View>
  )
}

export default HorizontalRule

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    alignItems:'center'
},
rule:{
    height: 3,
    width: 159,
    borderRadius:1,
    backgroundColor:COLORS.gray

},
or:{
    marginHorizontal:10,
    fontFamily:FONT.regular


}
})