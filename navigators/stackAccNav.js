import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AccountScreen} from '../screens/Account';
import {SettingsScreen} from '../screens/AccountScreens/Settings'; 
import {ContactScreen} from '../screens/AccountScreens/Contact'; 
import {AboutScreen} from '../screens/AccountScreens/About';

const Stack = createStackNavigator();

const StackAccNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

export default StackAccNavigator;