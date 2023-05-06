import { View, Text, StyleSheet,TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constant/theme'
import { Ionicons } from '@expo/vector-icons';
import CatButtons from '../Components/CategoryButton';
import RestaurantCard from '../Components/RestaurantCard';
import FoodCard from '../Components/FoodCard';
import { fetchRecipes } from '../apis/testEdamamAPI';
import { ReceipeAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
      const [recipes, setRecipes] = useState([]);
        	const dispatch = useDispatch()



    const receipes = useSelector((state) => state.ReceipeReducer);

    // const getReceipe = async () => {
	// 	try {
	// 		dispatch(ReceipeAction("chicken"))
			

	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }



    useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes('chicken');
      setRecipes(data);
    };
    loadRecipes();
    // getReceipe();
  }, []);

  console.log('receipes',recipes);

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

            <Text style={{marginVertical:15,color:COLORS.black}}>Hello ritzy,</Text>



            <Text style={{color:COLORS.green,fontSize:24,marginVertical:1,fontWeight:'bold'}}>Find Your Favourites {'\n'}Food Receipe Here</Text>
            

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
        <Image source={require('../../assets/filter.png')} />
        </TouchableOpacity>
        </View>



        <View>  
           <View>
            <Text style={{ fontSize:18, color:COLORS.black}}>Categories</Text>
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
           title={'chicken'}
           extContStyle={{backgroundColor:COLORS.gray}}
           exttxtStyle={{color:COLORS.black}}
           />
           <CatButtons
           title={'Dairy'}
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
            {/* <Text style={{ fontWeight:'bold',fontSize:18, color:COLORS.black, marginVertical:15}}>Intercontinental</Text> */}
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:30}}>

           <RestaurantCard
           title={'Recipee name'}
           image={require('../../assets/rest1.png')}
           star={'4.5'}
           distance ={'630'}
           delivery ={'525'} 
           />
           {/* <RestaurantCard
           title={'Burgs.co'}
           star={'4.5'}
           image={require('../../assets/rest2.png')}
           distance ={'3900'}
           delivery ={'1987'} 
           /> */}

           </View>
           </ScrollView>
            
            </View> 

            {/* <View>  
           <View>
            <Text style={{ fontWeight:'bold',fontSize:18, color:COLORS.black, marginVertical:15}}>African</Text>
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:30}}>

           <RestaurantCard
           title={'Mama Cass'}
           image={require('../../assets/rest1.png')}
           star={'4.5'}
           distance ={'12Km'}
           delivery ={'Delivery available'} 
           />
           <RestaurantCard
           title={'Burgs.co'}
           star={'4.5'}
           image={require('../../assets/rest2.png')}
           distance ={'25Km'}
           delivery ={'Delivery available'} 
           />

           </View>
           </ScrollView>
            
            </View>  */}


        {/* <View>  
           <View>
            <Text style={{fontSize:18, color:COLORS.black, marginVertical:15}}>Food</Text>
           </View>
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
        <View style={{flexDirection:'row',gap:30}}>

           <FoodCard
           restaurant={'Mama Cass'}
           image={require('../../assets/food1.png')}
           star={'4.5'}
           food ={'jollof Rice'}
           price ={'25'} 
           />
           <FoodCard
           restaurant={'Rai Hub'}
           image={require('../../assets/food2.png')}
           star={'5'}
           food ={'Plantain poriage '}
           price ={'50'} 
           />
           

           </View>
           </ScrollView>
            
            </View>  */}

        </View>

        
    </View>
    </SafeAreaView>
  )
}

export default Home

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