import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import StackNavigator from '../navigators/stackAlertNav';

const AlertScreen = props => { 
    return (
        <StackNavigator />
    )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {AlertScreen}