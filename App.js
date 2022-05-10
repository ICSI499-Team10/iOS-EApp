import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginNavigator} from './navigators/loginNav';   // Imports loginNav from the navigators folder

/**
 * Runs the application; first file ran.
 * @returns Default open to Login Screen; part of LoginNavigator.
 */
export default function App() { 
  return (
    <NavigationContainer>
      <LoginNavigator />  
    </NavigationContainer>
  )
}