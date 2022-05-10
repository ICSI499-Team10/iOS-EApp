import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const AboutScreen = props => { 
    return (
        <View style={{padding: 5}}>
            <Text style={globalStyles.titleText2}>About EApp</Text>
            <Text style={{fontSize: 15, padding: 5, alignItems: center}}>
              EApp is an application that disseminates emergency 
              information to a user's device. This information comes from a 
              repository run by the UbiNET Laboratory and saves the data locally 
              to the device. Thus, users will not have to be connected to Internet 
              constantly in order to view the content.
              </Text>
              <Text style={{fontSize: 20, fountWeight: "bold", padding: 5, alignItems: center}}>
                
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