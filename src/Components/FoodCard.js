import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'
import { Entypo } from '@expo/vector-icons';



const FoodCard = ({restaurant,food,price,star,image}) => {
  return (
    <View style={styles.contaner}>
      <View style={styles.foodCont}>
        <Image
          style={styles.image}
          source={image}
          resizeMode={'cover'}
          />
          <View style={{marginTop:15}}>
          <Text style={styles.title}> {restaurant} </Text>
          <Text style={styles.title}> {food}</Text>
          <Text style={styles.title}> {`$${price}`}</Text>
          </View>

          <TouchableOpacity style={styles.hrt}>
         <AntDesign name="hearto" size={12} color="#fff" />
          </TouchableOpacity>
          

      </View>
         
         <TouchableOpacity style={styles.bar}>
        <Entypo name="star" size={16} color="#FFC107" />
      <Text style={styles.rating}>{star}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
contaner:{
height:115,
width:208,
borderRadius:10,
backgroundColor:COLORS.white,

   shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8


},

image:{
  width:112,
height:94,
margin:9,
borderRadius:10
},
title:{
    color:COLORS.black,
    fontSize:12,
    marginVertical:3,
    marginLeft:-7
},

hrt:{
height:25,
width: 25,
backgroundColor:'#037F00B2',
borderRadius:50,
alignItems:'center',
justifyContent:'center',
position:'absolute',
top:85,
left:170
},
 bar:{
    width:20,
    height:40,
    backgroundColor:COLORS.white,
    borderRadius:20,
     alignItems:'center',
    justifyContent:'center',
    position:'absolute',
   top:68,
  right:175
},
rating:{
    fontSize:10,
    
    },
  foodCont:{
    flexDirection:'row', 
    // borderRadius:10,
 
}
  
})