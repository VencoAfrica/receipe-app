import { View, Text, StyleSheet,TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import filter from '../assets/Icons/filter.png'


import {FONT,COLORS} from '../constant/theme'
import restOne from '../assets/rest1.png'
import restTwo from '../assets/rest2.png'
import foodOne from '../assets/food1.png'
import foodTwo from '../assets/food2.png'

import CatButtons from '../Components/CategoryButton';
import RestaurantCard from '../Components/RestaurantCard';
import FoodCard from '../Components/FoodCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const Menu = () => {
  return (
    <SafeAreaView>

    <View style={styles.container}>
        
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity>
    <Ionicons name="menu" size={25} color="black" /> 
           </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="notifications" size={24} color={COLORS.green} />   
                 </TouchableOpacity>
            </View>

            <Text style={{fontFamily:FONT.regular,marginVertical:15,color:COLORS.black}}>Hello ritzy,</Text>



            <Text style={{fontFamily:FONT.bold,color:COLORS.green,fontSize:24,marginVertical:1}}>Find Nigerian {'\n'}Food close to you</Text>
            

        <View style={{flexDirection:'row',alignItems:'center',}}>
            <View style={styles.textB}>
            <Ionicons name={'search'} size={20} color="#333333"  margin={4}/>
            <TextInput
            placeholder={'Restaurant, Food'}
            onChangeText={() =>{}}
            // value={''}
            style={styles.txtbox}
            />
        </View>
         <TouchableOpacity style={styles.boxa}>
        <Image source={filter} />
        </TouchableOpacity>
        </View>



        <View>  
           <View>
            <Text style={{fontFamily:FONT.semiBold, fontSize:18, color:COLORS.black}}>Categories</Text>
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:25}}>

           <CatButtons
           title={'All'}
           />
           <CatButtons
           title={'Swallow'}
           extContStyle={{backgroundColor:COLORS.gray}}
           exttxtStyle={{color:COLORS.black}}
           />
           <CatButtons
           title={'Soups'}
           extContStyle={{backgroundColor:COLORS.gray}}
           exttxtStyle={{color:COLORS.black}}
           />
           <CatButtons
           title={'Vegetable'}
           extContStyle={{backgroundColor:COLORS.gray}}
           exttxtStyle={{color:COLORS.black}}
           />

           </View>
           </ScrollView>
            
            </View> 



        <View>  
           <View>
            <Text style={{fontFamily:FONT.semiBold, fontSize:18, color:COLORS.black, marginVertical:15}}>Restuarants</Text>
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:30}}>

           <RestaurantCard
           title={'Mama Cass'}
           image={restOne}
           star={'4.5'}
           distance ={'12Km'}
           delivery ={'Delivery available'} 
           />
           <RestaurantCard
           title={'Burgs.co'}
           star={'4.5'}
           image={restTwo}
           distance ={'25Km'}
           delivery ={'Delivery available'} 
           />

           </View>
           </ScrollView>
            
            </View> 


        <View>  
           <View>
            <Text style={{fontFamily:FONT.semiBold, fontSize:18, color:COLORS.black, marginVertical:15}}>Food</Text>
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:30}}>

           <FoodCard
           restaurant={'Mama Cass'}
           image={foodOne}
           star={'4.5'}
           food ={'jollof Rice'}
           price ={'25'} 
           />
           <FoodCard
           restaurant={'Rai Hub'}
           image={foodTwo}
           star={'5'}
           food ={'Plantain poriage '}
           price ={'50'} 
           />
           

           </View>
           </ScrollView>
            
            </View> 

        </View>

        
    </View>
    </SafeAreaView>
  )
}

export default Menu

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginVertical: 15,
    marginHorizontal: 15,
},

textB:{
  height:40,
  width:300,
  backgroundColor:COLORS.gray,
  flexDirection:'row',
  alignItems:'center',
  borderRadius:10,
  marginVertical:15,
   shadowColor: COLORS.black,
 shadowOffset: { width: 0, height: 3,},
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 10
},
txtbox:{
  height:40,
  width:300,
 
},
 boxa:{
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.green,
        borderRadius:10,
        marginHorizontal:10


    }
 
});