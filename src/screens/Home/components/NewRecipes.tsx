import {StyleSheet, FlatList, Pressable, View} from "react-native";
import {BoldText} from "../../../components/CustomText/BoldText";
import {FONTSIZE} from "../../../theme/sizes";
import {VerticalSpacer} from "../../../components/Spacers/VerticalSpacer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import RecipeService from "../../../services/RecipeService";
import {setLatestMeals, setMeals} from "../../../redux/slices/mealSlice";
import {COLORS} from "../../../theme/colors";

export const NewRecipeList = () => {
    const dispatch = useDispatch();
    const {latestMeals} = useSelector((state: any) => state.meal);
    const renderRecipes = ({item}: any) => {
        console.log('ITEM=================>>', item)
        const selectItem = () => {
        }
        return (
            <View style={{marginRight: 10, width: 250}}>
                <Pressable onPress={selectItem} style={[styles.categoryItem, {backgroundColor: COLORS.white}]}>
                    <BoldText style={{color: COLORS.gray4, fontSize: FONTSIZE.font12, fontWeight: '500'}}>
                        {item.strMeal}
                    </BoldText>
                </Pressable>
            </View>
        );
    };

    const fetchRecipes = async () => {
        await RecipeService.listRecipesByName('')
            .then((response) => {
                console.log('MEALS===================', response.data.meals[0]);
                dispatch(setLatestMeals(response.data.meals))
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <View>
            <BoldText style={{fontSize: FONTSIZE.font16}}>New Recipes</BoldText>
            <VerticalSpacer />
            <View style={{width: '100%'}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={latestMeals}
                    renderItem={(item) => renderRecipes(item)}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    categoryItem: {

    }
});
