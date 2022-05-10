import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AlertScreen} from '../screens/Alert';       // Import main Alert screen
import {AlertAllScreen} from '../screens/AlertScreens/AlertAll';           // Import All subcategory screen
import {AlertFireScreen} from '../screens/AlertScreens/AlertFire';      // Import Fire subcategory screen
import {AlertHealthScreen} from '../screens/AlertScreens/AlertHealth';      // Import Health subcategory screen
import {AlertRoadsScreen} from '../screens/AlertScreens/AlertRoads';        // Import Roads subcategory screen
import {AlertWeatherScreen} from '../screens/AlertScreens/AlertWeather';        // Import Weather subcategory screen
import {AlertOtherScreen} from '../screens/AlertScreens/AlertOther';        // Import Other subcategory screen

const Stack = createStackNavigator();       // Creates navigator

/**
 * Creates navigator for Alerts and its screens for functionality.
 * @returns Navigator path for Alerts tab functionality.
 */
const StackAlertNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Alert" 
                component={AlertScreen} 
                options={{
                    headerLeft: null
                }}
            />
            <Stack.Screen name="All" component={AlertAllScreen} />
            <Stack.Screen name="Fire" component={AlertFireScreen} />
            <Stack.Screen name="Health" component={AlertHealthScreen} />
            <Stack.Screen name="Roads" component={AlertRoadsScreen} />
            <Stack.Screen name="Weather" component={AlertWeatherScreen} />
            <Stack.Screen name="Other" component={AlertOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackAlertNavigator;