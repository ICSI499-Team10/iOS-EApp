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
                try {
                  const URI = "http://eapp-test.arcc.albany.edu/publish/CreateAccount"
                  const response = await fetch(URI, {
                    method: "POST",
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: {
                      "userType": "",
                      "user": {
                        "firstName": "",
                        "lastName": "",
                        "email": "",
                        "mac": "",
                        "password": "",
                        "address": "",
                        "phone": "",
                        "emergencyName": "",
                        "emergencyPhone": ""
                      }
                    }
                  });
                  const dataJSON = await response.json();
                  console.log(dataJSON);
                } catch (error) {
                  console.log(error);
                }
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