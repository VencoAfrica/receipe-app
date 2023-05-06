import {StyleSheet,FlatList, Pressable, TouchableHighlight, View} from "react-native";
import React, {useEffect} from "react";
import RecipeService from "../../../services/RecipeService";
import {SearchBar} from "../../../components/SearchBar";
import {setCategories, setCurrentMeal, setMeals} from "../../../redux/slices/mealSlice";
import {useDispatch, useSelector} from "react-redux";
import {COLORS} from "../../../theme/colors";
import {VerticalSpacer} from "../../../components/Spacers/VerticalSpacer";
import {BoldText} from "../../../components/CustomText/BoldText";
import {FONTSIZE} from "../../../theme/sizes";
import CustomImage from "../../../components/CustomImage";
import CustomText from "../../../components/CustomText/CustomText";
import {Feather} from "@expo/vector-icons";
import {ROUTES} from "../../../constants/appRoutes";
import {useNavigation} from "@react-navigation/native";

export const RecipeList = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const {meals, categories} = useSelector((state) => state.meal);
    const [recipeName, setRecipeName] = React.useState('');

    //console.log('CATEGORY', categories);
    const renderMeals = ({item}) => {
        //console.log('MEAL Item', item);
        const selectCurrentItem = () => {
            dispatch(setCurrentMeal(item));
            navigation.navigate(ROUTES.RECIPE_DETAILS);
        }
       return (
           <Pressable onPress={selectCurrentItem}>
              <View style={{margin: 8, alignItems: 'center'}}>
                  <View style={{zIndex: 10}}>
                      <CustomImage image={{uri: item.strMealThumb}} style={{width: 120, height: 120, borderRadius: 100}}/>
                  </View>
                  <View style={{backgroundColor: COLORS.gray4Opac, height: 180, width: 150, top: -50, borderRadius: 16, alignItems: 'center', paddingHorizontal: 8}}>
                      <VerticalSpacer height={60} />
                      <CustomText numberOfLines={2} style={{fontSize: FONTSIZE.font14, fontWeight: '500', textAlign: 'center'}}>{item.strMeal}</CustomText>
                      <View style={{position: 'absolute', bottom: 10, width: '100%', }}>
                          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                              <CustomText style={{color: COLORS.gray3, fontSize: FONTSIZE.font12}}>Time:</CustomText>
                              <View/>
                          </View>
                          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                              <CustomText style={{color: COLORS.gray1, fontSize: FONTSIZE.font14}}>15 mins</CustomText>
                              <Pressable style={{backgroundColor: COLORS.white, borderRadius: 20, padding: 4}}>
                                  <Feather name="bookmark" size={18} color="black" />
                              </Pressable>
                          </View>
                      </View>

                  </View>
              </View>
           </Pressable>
       )
    };
    const renderCategories = ({item}) => {
        let bgColor = item.selected ? COLORS.primary : COLORS.white;
        let textColor = item.selected ? COLORS.white : COLORS.primary;

        const selectItem = () => {
            setRecipeName(item.strCategory);
            fetchMealsByCategory(item.strCategory);
            let newCategories = [...categories];
            newCategories.forEach((category) => {
                category.selected = false;
            });
            newCategories.find((category) => category.idCategory === item.idCategory).selected = true;
            dispatch(setCategories(newCategories));
        }

        return (
            <Pressable onPress={selectItem} style={[styles.categoryItem, {backgroundColor: bgColor}]}>
                <BoldText style={{color: textColor, fontSize: FONTSIZE.font12, fontWeight: '500'}}>
                    {item.strCategory}
                </BoldText>
            </Pressable>
        )
    };

    const fetchMealsByCategory = async (name=recipeName) => {
        await RecipeService.filterByCategory(recipeName)
            .then((response) => {
                console.log('MEALS===================', response.data.meals[0]);
                dispatch(setMeals(response.data.meals))
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const fetchCategories = async () => {
        await RecipeService.listAllCategories()
            .then((response) => {
                console.log('CAT===================', response.data.categories[0]);
                let allRes = [...response.data.categories];
                allRes.forEach((category) => {
                    category.selected = false;
                });
                allRes[0].selected = true;
                setRecipeName(allRes[0].strCategory)
                fetchMealsByCategory(allRes[0].strCategory)
                dispatch(setCategories(allRes));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchMealsById = async (id) => {
        await RecipeService.getRecipeById(id)
            .then((response) => {
                console.log('MEALS===================', response.data.meals[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchCategories();
        fetchMealsByCategory();
    }, []);

    return (
        <View>
            <SearchBar onChangeText={setRecipeName} placeholder={'Search recipe'} callToSearch={fetchMealsByCategory}/>
            <VerticalSpacer/>
            <View style={{width: '100%'}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={(item) => renderCategories(item)}
                />
            </View>
            <VerticalSpacer/>
            <View style={{width: '100%'}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={meals}
                    renderItem={(item) => renderMeals(item)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: COLORS.white,
        marginVertical: 2,
        marginHorizontal: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
});
