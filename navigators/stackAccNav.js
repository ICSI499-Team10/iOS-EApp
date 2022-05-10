import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../screens/Account';       // Import main Account screen
import {ProfileScreen} from '../screens/AccountScreens/Profile';        // Import "My Profile" screen
import {SettingsScreen} from '../screens/AccountScreens/Settings';      // Import Settings screen
import {ContactScreen} from '../screens/AccountScreens/Contact';        // Import "Contact Us" screen
import {AboutScreen} from '../screens/AccountScreens/About';        // Import About screen
import {LogInScreen} from '../screens/LogIn';       // Import Login screen

const Stack = createStackNavigator();       // Creates navigator

/**
 * Creates navigator for Account and its screens for functionality.
 * @returns Navigator path for Account tab functionality.
 */
const StackAccNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Account" 
                component={AccountScreen}
                options={{
                    headerLeft: null
                }} 
            />
            <Stack.Screen name="My Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Login" component={LogInScreen} />
        </Stack.Navigator>
    )
}

export default StackAccNavigator;