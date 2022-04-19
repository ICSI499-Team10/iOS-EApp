import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AccountScreenSub} from '../screens/AccountSub';
import {SettingsScreen} from '../screens/AccountScreens/Settings'; 
import {ContactScreen} from '../screens/AccountScreens/Contact'; 
import {AboutScreen} from '../screens/AccountScreens/About';
import {LogInScreen} from '../screens/LogIn';

const Stack = createStackNavigator();

const stackNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AccountSub" component={AccountScreenSub} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Login" component={LogInScreen} />
        </Stack.Navigator>
    )
}

export default stackNavigator;