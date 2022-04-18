import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AdvisoryScreenSub} from '../screens/AdvisorySub';
import {AdvisoryAllScreen} from '../screens/AdvisoryScreens/AdvisoryAll';
import {AdvisoryFireScreen} from '../screens/AdvisoryScreens/AdvisoryFire'; 
import {AdvisoryHealthScreen} from '../screens/AdvisoryScreens/AdvisoryHealth'; 
import {AdvisoryRoadsScreen} from '../screens/AdvisoryScreens/AdvisoryRoads';
import {AdvisoryWeatherScreen} from '../screens/AdvisoryScreens/AdvisoryWeather'; 
import {AdvisoryOtherScreen} from '../screens/AdvisoryScreens/AdvisoryOther';
import {globalStyles} from '../styles/globalStyles';

const Stack = createStackNavigator();

const stackAdvisoryNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Advisory" component={AdvisoryScreenSub} />
            <Stack.Screen name="All" component={AdvisoryAllScreen} />
            <Stack.Screen name="Fire" component={AdvisoryFireScreen} />
            <Stack.Screen name="Health" component={AdvisoryHealthScreen} />
            <Stack.Screen name="Roads" component={AdvisoryRoadsScreen} />
            <Stack.Screen name="Weather" component={AdvisoryWeatherScreen} />
            <Stack.Screen name="Other" component={AdvisoryOtherScreen} />
        </Stack.Navigator>
    )
}

export default stackAdvisoryNavigator;