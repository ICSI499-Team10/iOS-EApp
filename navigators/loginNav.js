import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import {LogInScreen} from "../screens/LogIn"
import {RegisterScreen} from "../screens/Register"
import BottomTabNavigator from '../navigators/bottomTabNav';



const Stack = createStackNavigator();

const LoginNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Log In" component={LogInScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name ="Bottom Tab" component={BottomTabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export {LoginNavigator};