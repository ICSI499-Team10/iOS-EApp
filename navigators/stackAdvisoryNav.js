import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AdvisoryScreen} from '../screens/Advisory';     // Import main Advisory screen
import {AdvisoryAllScreen} from '../screens/AdvisoryScreens/AdvisoryAll';       // Import All subcategory screen
import {AdvisoryFireScreen} from '../screens/AdvisoryScreens/AdvisoryFire';     // Import Fire subcategory screen
import {AdvisoryHealthScreen} from '../screens/AdvisoryScreens/AdvisoryHealth';         // Import Health subcategory screen
import {AdvisoryRoadsScreen} from '../screens/AdvisoryScreens/AdvisoryRoads';       // Import Roads subcategory screen
import {AdvisoryWeatherScreen} from '../screens/AdvisoryScreens/AdvisoryWeather';       // Import Weather subcategory screen
import {AdvisoryOtherScreen} from '../screens/AdvisoryScreens/AdvisoryOther';       // Import Other subcategory screen

const Stack = createStackNavigator();       // Creates navigator

/**
 * Creates navigator for Advisory and its screens for functionality.
 * @returns Navigator path for Advisory tab functionality.
 */
const StackAdvisoryNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Advisory" 
                component={AdvisoryScreen}
                options={{
                    headerLeft: null,
                }}
            />
            <Stack.Screen name="All" component={AdvisoryAllScreen}/>
            <Stack.Screen name="Fire" component={AdvisoryFireScreen} />
            <Stack.Screen name="Health" component={AdvisoryHealthScreen} />
            <Stack.Screen name="Roads" component={AdvisoryRoadsScreen} />
            <Stack.Screen name="Weather" component={AdvisoryWeatherScreen} />
            <Stack.Screen name="Other" component={AdvisoryOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackAdvisoryNavigator;