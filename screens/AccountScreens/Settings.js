import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native'; 
import {globalStyles} from '../../styles/globalStyles';

/**
 * Displays Settings screen for Account tab.
 * @param {*} props Navigation for Account
 * @returns Settings screen.
 */
const SettingsScreen = props => { 
  console.log(props)
    return (
        <View style={globalStyles.containerSub}>
            <Text style={globalStyles.titleText}>Settings Screen</Text>
            <Text style={globalStyles.titleText2}> *Currently WIP* </Text>
        </View>   
    )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {SettingsScreen}