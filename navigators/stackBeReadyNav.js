import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {BeReadyScreenSub} from '../screens/BeReadySub';
import {BeReadyAllScreen} from '../screens/BeReadyScreens/BeReadyAll';
import {BeReadyFireScreen} from '../screens/BeReadyScreens/BeReadyFire'; 
import {BeReadyHealthScreen} from '../screens/BeReadyScreens/BeReadyHealth'; 
import {BeReadyRoadsScreen} from '../screens/BeReadyScreens/BeReadyRoads';
import {BeReadyWeatherScreen} from '../screens/BeReadyScreens/BeReadyWeather'; 
import {BeReadyOtherScreen} from '../screens/BeReadyScreens/BeReadyOther';

const Stack = createStackNavigator();

const stackBeReadyNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Advisory" component={BeReadyScreenSub} />
            <Stack.Screen name="All" component={BeReadyAllScreen} />
            <Stack.Screen name="Fire" component={BeReadyFireScreen} />
            <Stack.Screen name="Health" component={BeReadyHealthScreen} />
            <Stack.Screen name="Roads" component={BeReadyRoadsScreen} />
            <Stack.Screen name="Weather" component={BeReadyWeatherScreen} />
            <Stack.Screen name="Other" component={BeReadyOtherScreen} />
        </Stack.Navigator>
    )
}

export default stackBeReadyNavigator;