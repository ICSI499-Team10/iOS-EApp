import React from 'react'; 
import {StyleSheet, View, Text, Button} from 'react-native'; 

const AccountScreenSub = props => { 
  return (
    <View style={styles.screen}>
        <Button title="Settings" onPress={() => { 
          props.navigation.navigate('Settings')
        }}/>
        <Button title="Contact Us" onPress={() => { 
          props.navigation.navigate('Contact')
        }}/>
        <Button title="About Us" onPress={() => { 
          props.navigation.navigate('About')
        }}/>
        <Button title="Log Out" onPress={() => { 
          props.navigation.navigate('Login')
        }}/>
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

export {AccountScreenSub}