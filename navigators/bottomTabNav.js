import React from 'react';
import Icon from '../icons/icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AdvisoryStack from '../navigators/stackAdvisoryNav'; 
import AlertStack from '../navigators/stackAlertNav'; 
import BeReadyStack from '../navigators/stackBeReadyNav'; 
import AccountStack from '../navigators/stackAccNav';

const Tab = createBottomTabNavigator(); 

const BottomTabNavigator = () => { 
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Advisory" 
                component={AdvisoryStack} 
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"warning"} color={color} size={size}/>)
                }}
            />

            <Tab.Screen 
                name="Alert" 
                component={AlertStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="FontAwesome" name={"bell-o"} color={color} size={size}/>)
                }} 

            />
            <Tab.Screen 
                name="Be Ready" 
                component={BeReadyStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"happy-outline"} color={color} size={size}/>)
                }}  
            />
            <Tab.Screen 
                name="Account" 
                component={AccountStack}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon type="Ionicons" name={"ios-person-circle"} color={color} size={size}/>)
                }}   

            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator; 