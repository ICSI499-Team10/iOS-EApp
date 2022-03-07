import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AdvisoryScreen} from '../screens/Advisory'; 
import {AlertScreen} from '../screens/Alert'; 
import {BeReadyScreen} from '../screens/BeReady'; 
import {AccountScreen} from '../screens/Account'; 

const Tab = createBottomTabNavigator(); 

const bottomTabNavigator = () => { 
    return(
        <Tab.Navigator>
            <Tab.Screen name="Advisory" component={AdvisoryScreen} />
            <Tab.Screen name="Alert" component={AlertScreen} />
            <Tab.Screen name="Be Ready" component={BeReadyScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default bottomTabNavigator; 