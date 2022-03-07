import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer } from 'react-navigation';
import BottomTabNavigator from './navigators/bottomTabNav';
import {LogInScreen} from './screens/LogIn';
import {createNavigationContainer } from 'react-navigation';


export default function App() { 
  return (
    <NavigationContainer>
      
      <BottomTabNavigator />
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