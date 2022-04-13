import React from 'react'; 
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { Alert } from 'react-native-web';

const RegisterScreen = ({navigation}) => { 
    return (
        <View style={styles.screen}>
            <Text>Create an Account</Text>
            <TextInput placeholder='Name' onChangeText={(text) => this.setState({name: text})}/>
            <TextInput placeholder='Email' onChangeText={(text) => this.setState({email: text})}/>
            <TextInput placeholder='Phone Number' onChangeText={(text) => this.setState({phone: text})}/>
            <TextInput placeholder='Password' secureTextEntry = {true} onChangeText={(text) => this.setState({password: text})}/>
            <TextInput placeholder='Confirm Password' secureTextEntry = {true}/>
            <TextInput placeholder='Address' onChangeText={(text) => this.setState({address: text})}/>
            <TextInput placeholder='Emergency Contact' onChangeText={(text) => this.setState({emergencyName: text})}/>
            <TextInput placeholder='Emergency Contact Phone Number' onChangeText={(text) => this.setState({emergencyPhone: text})}/>
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
                        "name": this.state.name,
                        "email": this.state.email,
                        "mac": "",
                        "password": this.state.password,
                        "address": this.state.address,
                        "phone": this.state.phone,
                        "emergencyName": this.state.emergencyName,
                        "emergencyPhone": this.state.emergencyPhone
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