import React from 'react';
import Icon from '../icons/icons'
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
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"warning"} color={color} size={size}/>)
                }}
            />

            <Tab.Screen 
                name="Alert" 
                component={AlertScreen}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"bell-o"} color={color} size={size}/>)
                }} 

            />
            <Tab.Screen 
                name="Be Ready" 
                component={BeReadyScreen}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"happy-outline"} color={color} size={size}/>)
                }}  
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"ios-person-circle"} color={color} size={size}/>)
                }}   

            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator; 