import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'
import { Entypo } from '@expo/vector-icons';



const RestaurantCard = ({title,distance,delivery,star,image}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={image}
        resizeMode={'cover'}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection:'row', gap:15,alignItems:'center'}}>
        <View style={{flexDirection:'row', gap:5,alignItems:'center'}}>
            {/* <Ionicons name="navigate" size={12} color={COLORS.black} /> */}
            <SimpleLineIcons name="energy" size={12} color={COLORS.black} />
            <Text  style={styles.icontxt}>{distance}</Text>
        </View>
        <View style={{flexDirection:'row', gap:5,alignItems:'center'}}>
            {/* <Feather name="truck" size={12} color={COLORS.black} /> */}
            <FontAwesome5 name="weight" size={12} color="black" />
             <Text  style={styles.icontxt}>{delivery}</Text>
        </View>
         </View>
         <TouchableOpacity style={styles.bar}>
        <Entypo name="star" size={16} color="#FFC107" />
      <Text style={styles.rating}>{star}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
image:{
height:160,
width:235,
borderRadius:10
},
title:{
    color:COLORS.black,
    fontSize:12,
    marginVertical:5
},
icontxt:{
    color:COLORS.black,
    fontSize:10  
},

 bar:{
    width:20,
    height:40,
    backgroundColor:COLORS.white,
    borderRadius:20,
     alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:115,
    left:190
},
rating:{
    fontSize:10,
    
    }
})