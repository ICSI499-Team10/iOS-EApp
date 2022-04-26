import React, {useState} from 'react'; 
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {globalStyles} from '../styles/globalStyles';

const LogInScreen = ({navigation}) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mac, setMAC] = useState('');

    const req = {
      method: "POST", 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "email": email, 
        "password": password,
        "mac": '3c:06:30:38:b6:14'
      })
    };

    const submitHandler = async () => { 
      try { 
        const URI = "http://eapp-test.arcc.albany.edu/publish/SignIn";
        const response = await fetch(URI, req);
        const dataJSON = await response.json();
        console.log(dataJSON)
        if(dataJSON === null){ 
          alert("Incorrect email or password. Try again!")
        } else { 
          if(dataJSON["token"]){ 
            console.log("navigating to bottom tabs")
            navigation.navigate("Bottom Tab")
          }
        }
      } catch(error) { 
        console.log(error)
      }
    };

    return (
        <View style={globalStyles.loginContainer}>
            <Text style = {globalStyles.titleText}>Log In</Text>
            <TextInput 
              placeholder='Email' 
              onChangeText={name => setEmail(name)}
              style = {globalStyles.textInput}
            />
            <TextInput 
              placeholder='Password' 
              secureTextEntry = {true} 
              onChangeText={password => setPassword(password)}
              style = {globalStyles.textInput}
            />
            <Button 
              title = "Forgot Password?"
              onPress = {() => alert("Not a feature yet")}
              color = "#46AFFF" 
            />
            <View style = {globalStyles.containerSub}>
              <View style = {globalStyles.loginButtons}>
                <Button 
                  title = "Login"
                  onPress = {() => submitHandler(this)}
                  color = "white" 
                />
              </View>
              <View style = {globalStyles.loginButtons}>
                <Button
                  title = "Register"
                  onPress = {() => navigation.navigate("Register")}
                  color = "white"
                />
              </View>
            </View>
        </View>   
    )
};

export {LogInScreen}