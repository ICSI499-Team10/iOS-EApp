import React from 'react'; 
import { Text, View, StyleSheet, Button, Linking } from 'react-native';

/**
 * Displays Contact Us screen for Account tab.
 * @param {*} props Navigation for Account
 * @returns Contact Us screen.
 */
const ContactScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Contact Us Screen</Text>
            <Text>Found an issue with the application? Send a report to our developers here:</Text>
            <Button
              title = "EApp Issue Report"
              onPress = {() => Linking.openURL("https://gitreports.com/issue/UbiNet-Research/eapp")}
            />
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