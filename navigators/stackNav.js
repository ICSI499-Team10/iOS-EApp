import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AccountScreenSub} from '../screens/AccountSub';
import {SettingsScreen} from '../screens/Settings'; 
import {ContactScreen} from '../screens/Contact'; 
import {AboutScreen} from '../screens/About';

const Stack = createStackNavigator();

const stackNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AccountSub" component={AccountScreenSub} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

export default stackNavigator;