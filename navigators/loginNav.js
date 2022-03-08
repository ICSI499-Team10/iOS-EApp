import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {LogInScreen} from "../screens/LogIn"
import BottomTabNavigator from '../navigators/bottomTabNav';

const Stack = createStackNavigator();

const LoginNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Log In" component={LogInScreen} />

        </Stack.Navigator>
    )
}

export {LoginNavigator};