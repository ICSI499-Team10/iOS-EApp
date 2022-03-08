import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigators/bottomTabNav';
import {LoginNavigator} from './navigators/loginNav';


export default function App() { 
  return (
    <NavigationContainer>
      <LoginNavigator />  
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