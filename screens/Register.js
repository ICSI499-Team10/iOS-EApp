import React from 'react'; 
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { Alert } from 'react-native-web';

const RegisterScreen = ({navigation}) => { 
    return (
        <View style={styles.screen}>
            <Text>Create an Account</Text>
            <TextInput placeholder='First Name'/>
            <TextInput placeholder='Last Name'/>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password' secureTextEntry = {true}/>
            <TextInput placeholder='Confirm Password' secureTextEntry = {true}/>
            <Button 
              title = "Create Account"
              onPress = {() => function POSTaccount() {
              }}
            />
            <Button 
              title = "Cancel"
              onPress = {() => navigation.navigate("Log In")}
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

export {RegisterScreen}