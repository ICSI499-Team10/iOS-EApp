import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigators/bottomTabNav'; 


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