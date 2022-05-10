import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {LogInScreen} from "../screens/LogIn"        // Import login screen
import {RegisterScreen} from "../screens/Register"      // Import register screen
import {BottomTabNavigator} from '../navigators/bottomTabNav';      // Import bottom tab

const Stack = createStackNavigator();       // Creates navigator

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