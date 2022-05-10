import React from 'react'; 
import { Text, View, StyleSheet} from 'react-native'; 

/**
 * Displays About screen for Account tab.
 * @param {*} props Navigation for Account
 * @returns About screen.
 */
const AboutScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>About Us Screen</Text>
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

export {AboutScreen}