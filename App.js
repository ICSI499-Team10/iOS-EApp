import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AdvisoryScreen } from './screens/Advisory'; 
import { AlertScreen } from './screens/Alert'; 
import { BeReadyScreen } from './screens/BeReady'

const Tab = createBottomTabNavigator()

export default function App() { 
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Advisory" component={AdvisoryScreen} />
        <Tab.Screen name="Alert" component={AlertScreen} />
        <Tab.Screen name="Be Ready" component={BeReadyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})