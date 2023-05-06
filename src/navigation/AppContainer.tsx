import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ROUTES} from "../constants/appRoutes";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import {Provider} from 'react-redux';
import {store} from "../redux/store";
import RecipeDetails from "../screens/RecipeDetails/RecipeDetails";
import SavedRecipeScreen from "../screens/SavedRecipe/SavedRecipe";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import {COLORS} from "../theme/colors";
import {View} from "react-native";
import CustomText from "../components/CustomText/CustomText";
import {FONTSIZE} from "../theme/sizes";

const btnContainer = {
    backgroundColor: COLORS.white,
    width: 58,
    height: 58,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
}

const btnStyle = {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5,
    shadowColor: COLORS.white,
    shadowOffset: {
        width: 2,
        height: 5,
    }
}
const HomeTabStack = createBottomTabNavigator();
const HomeTabNavigator = () => (
    <HomeTabStack.Navigator screenOptions={({ route }) =>({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
            let icon;
            if (route.name === ROUTES.HOME) {
                icon = <Entypo name="home" size={24} color={focused ? COLORS.primary : COLORS.gray4}/>
            } else if (route.name === ROUTES.SAVED) {
                icon = <MaterialCommunityIcons name="bookmark-minus-outline" size={24} color={focused ? COLORS.primary : COLORS.gray4} />;
            }else if (route.name === ROUTES.ADD) {
                icon = <View style={btnContainer}>
                    <View style={btnStyle}>
                        <CustomText style={{fontSize: FONTSIZE.font20, color: COLORS.white}}>+</CustomText>
                    </View>
                </View>
            } else if (route.name === ROUTES.NOTIF) {
                icon = focused ? <Entypo name="home" size={24} color="black"/> :
                    <Entypo name="home" size={24} color="black"/>;
            } else if (route.name === ROUTES.PROFILE) {
                icon = focused ? <Entypo name="home" size={24} color="black"/> :
                    <Entypo name="home" size={24} color="black"/>;
            }
            return icon;
        },
        tabBarStyle: {
            backgroundColor: '#6C6C6C14',
            borderTopWidth: 0,
            elevation: 0,
            shadowColor: '#6C6C6C14',
            shadowOffset: {
                width: 2,
                height: 5,
            }
        },
    })}>
        <HomeTabStack.Screen name={ROUTES.HOME} component={HomeScreen} />
        <HomeTabStack.Screen name={ROUTES.SAVED} component={SavedRecipeScreen} />
        <HomeTabStack.Screen name={ROUTES.ADD} component={HomeScreen} />
        <HomeTabStack.Screen name={ROUTES.NOTIF} component={NotificationScreen} />
        <HomeTabStack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </HomeTabStack.Navigator>
);

const MainStack = createStackNavigator();
const AppNavigator = () => (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name={ROUTES.MAIN} component={HomeTabNavigator} />
        <MainStack.Screen name={ROUTES.RECIPE_DETAILS} component={RecipeDetails} />
    </MainStack.Navigator>
);


export default function AppContainer() {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    )
}
