import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import { Button } from 'react-native-web';
import StackNavigator from '../navigators/stackAdvisoryNav';
import {globalStyles} from '../styles/globalStyles';

const AdvisoryScreen = props => { 
    return (
      <StackNavigator/>
    )
}

export {AdvisoryScreen}