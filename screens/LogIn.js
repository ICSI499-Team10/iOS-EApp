import { NavigationContainer } from '@react-navigation/native';
import React from 'react'; 
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { Alert } from 'react-native-web';

const LogInScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Log In</Text>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password' secureTextEntry = {true}/>
            <Button 
              title = "Login" 
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

export {LogInScreen}