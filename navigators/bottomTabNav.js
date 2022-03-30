import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AdvisoryScreen} from '../screens/Advisory'; 
import {AlertScreen} from '../screens/Alert'; 
import {BeReadyScreen} from '../screens/BeReady'; 
import {AccountScreen} from '../screens/Account';

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator = () => { 
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Advisory" 
                component={AdvisoryScreen} 
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"warning"} color={color} size={size}/>)
                }}
            />

            <Tab.Screen name="Alert" component={AlertScreen} />
            <Tab.Screen name="Be Ready" component={BeReadyScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator; 