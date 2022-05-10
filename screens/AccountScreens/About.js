import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native'; 

const AboutScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>About EApp</Text>
            <Text>
              EApp is an application that disseminates emergency 
              information to a user's device. This information comes from a 
              repository run by the UbiNET Laboratory and saves the data locally 
              to the device. Thus, users will not have to be connected to Internet 
              constantly in order to view the content.
              </Text>
              <Text>
                Everyone is safer with EApp!
              </Text>
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