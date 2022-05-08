import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './navigators/bottomTabNav';
import {LoginNavigator} from './navigators/loginNav';
import {FontContext} from './contexts/FontContext';


export default function App() { 
  const[font,setFont] = useState("regular")
  const value = {font,setFont}

  return (
    <FontContext.Provider value={"regular"}>
      <NavigationContainer>
        <LoginNavigator />  
      </NavigationContainer>
    </FontContext.Provider>
  )
}


const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})