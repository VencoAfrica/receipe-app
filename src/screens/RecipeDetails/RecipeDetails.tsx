import {View} from "react-native";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {AppBackground} from "../../components/AppBackground/AppBackground";

const RecipeDetails = ({ route, navigation }) => {
    const {currentMeal} = useSelector((state: any) => state.meal);
    //console.log('currentMeal===================>>', currentMeal)

    useEffect(() => {

    }, [])

    return (
        <AppBackground leftIcon={true}>

        </AppBackground>
    )
};

export default RecipeDetails;
