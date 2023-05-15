import React from 'react';
import {Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './home/index.tsx'
import SavedRecipeScreen from './saved/index.tsx';
import ProfileScreen from './profile/index.tsx';
import NotificationScreen from './notification/index.tsx';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: "none",
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconPath;

                        if (route.name === 'Home') {
                            iconName = "Home"
                            iconPath = require('../../../img/ic_nav_home.png')
                        } else if (route.name === 'Saved') {
                            iconName = "Saved"
                            iconPath = require('../../../img/ic_nav_saved.png')
                        } else if (route.name === 'Notifications') {
                            iconName = "Notifications"
                            iconPath = require('../../../img/ic_nav_notification.png')
                        } else if (route.name === 'Profile') {
                            iconName = "Profile"
                            iconPath = require('../../../img/ic_nav_profile.png')
                        }

                        return <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image source={iconPath}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#129575' : '#DBEBE7',

                                }}
                            />
                        </View>
                    },
                })}>
                    <Tab.Screen name ="Home" component={HomeScreen}/>
                    <Tab.Screen name="Saved" component={SavedRecipeScreen}/>
                    <Tab.Screen name ="Notifications" component={NotificationScreen}/>
                    <Tab.Screen name ="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
        
    );
}

export default AppTabNavigator;