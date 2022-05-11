import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

/**
 * Displays About screen for Account tab.
 * @param {*} props Navigation for Account
 * @returns About screen.
 */
const AboutScreen = props => { 
    return (
        <View style={{padding: 5}}>
            <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>About EApp</Text>
            <Text style={{fontSize: 15, paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10, textAlign: "center"}}>
              EApp is an application that disseminates emergency 
              information to a user's device. This information comes from a 
              repository run by the UbiNET Laboratory and saves the data locally 
              to the device. Thus, users will not have to be connected to Internet 
              constantly in order to view the content.
              </Text>
              <Text style={{fontSize: 20, fontWeight: "bold", padding: 5, textAlign: "center"}}>
                
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