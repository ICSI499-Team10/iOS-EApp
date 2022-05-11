import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {LogInScreen} from "../screens/LogIn"
import {RegisterScreen} from "../screens/Register"
import BottomTabNavigator from '../navigators/bottomTabNav';


const Stack = createStackNavigator();

/**
 * Creates the navgiator for Login and Register.
 * @returns Navigator path for Login and Register functionality.
 */
const LoginNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Log In" 
                component={LogInScreen}
            />
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen}
            />
            <Stack.Screen 
                name ="Bottom Tab" 
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    )
}

export {LoginNavigator};