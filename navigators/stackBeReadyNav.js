import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {BeReadyScreen} from '../screens/BeReady';       // Import main Be Ready screen
import {BeReadyAllScreen} from '../screens/BeReadyScreens/BeReadyAll';      // Import All subcategory screen
import {BeReadyFireScreen} from '../screens/BeReadyScreens/BeReadyFire';        // Import Fire subcategory screen
import {BeReadyHealthScreen} from '../screens/BeReadyScreens/BeReadyHealth';        // Import Health subcategory screen
import {BeReadyRoadsScreen} from '../screens/BeReadyScreens/BeReadyRoads';      // Import Roads subcategory screen
import {BeReadyWeatherScreen} from '../screens/BeReadyScreens/BeReadyWeather';      // Import Weather subcategory screen
import {BeReadyOtherScreen} from '../screens/BeReadyScreens/BeReadyOther';      // Import Other subcategory screen

const Stack = createStackNavigator();       // Creates navigator

/**
 * Creates navigator for Be Ready and its screens for functionality.
 * @returns Navigator path for Be Ready tab functionality.
 */
const StackBeReadyNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Be Ready" 
                component={BeReadyScreen} 
                options={{
                    headerLeft: null
                }}
            />
            <Stack.Screen name="All" component={BeReadyAllScreen} />
            <Stack.Screen name="Fire" component={BeReadyFireScreen} />
            <Stack.Screen name="Health" component={BeReadyHealthScreen} />
            <Stack.Screen name="Roads" component={BeReadyRoadsScreen} />
            <Stack.Screen name="Weather" component={BeReadyWeatherScreen} />
            <Stack.Screen name="Other" component={BeReadyOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackBeReadyNavigator;