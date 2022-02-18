import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Homescreen(props) { 
  console.log(props);
  return (
    //EApp Homescreen
    <View style={styles.screen}>
      <Button title="Advisory"/>
      <Button title="Alerts"/>
      <Button title="Be Ready"/>
    </View>
  )
}

const Stack = createStackNavigator(); 

function MyStack() { 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  )
}

export default function App() { 
  return (
    <NavigationContainer>
      <MyStack />
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