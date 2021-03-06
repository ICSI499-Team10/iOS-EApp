import React from 'react'; 
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

/**
 * Displays Contact Us screen for Account tab.
 * @param {*} props Navigation for Account
 * @returns Contact Us screen.
 */
const ContactScreen = props => { 
    return (
        <View style={globalStyles.loginContainer}>
            <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", paddingBottom: 10}}>Contact Us</Text>
            <Text style={{fontSize: 20, textAlign: "center", paddingBottom: 15}}>Found an issue with the application? Send a report to our developers here:</Text>
            <View style={globalStyles.registerButtons}>
              <Button
                title = "EApp Issue Report"
                onPress = {() => Linking.openURL("https://gitreports.com/issue/UbiNet-Research/eapp")}
                color = "white"
              />
            </View>
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

export {ContactScreen}