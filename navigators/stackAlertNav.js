import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AlertScreen} from '../screens/Alert';
import {AlertAllScreen} from '../screens/AlertScreens/AlertAll';
import {AlertFireScreen} from '../screens/AlertScreens/AlertFire'; 
import {AlertHealthScreen} from '../screens/AlertScreens/AlertHealth'; 
import {AlertRoadsScreen} from '../screens/AlertScreens/AlertRoads';
import {AlertWeatherScreen} from '../screens/AlertScreens/AlertWeather'; 
import {AlertOtherScreen} from '../screens/AlertScreens/AlertOther';

const Stack = createStackNavigator();

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