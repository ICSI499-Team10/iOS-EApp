import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';

const LogInScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Log In</Text>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password' secureTextEntry = {true}/>
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

export {LogInScreen}