import React, {useState} from 'react'; 
import {Text, View, TextInput, Button} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';   // Import for internal storage capability
import {globalStyles} from '../styles/globalStyles';    // Import of style sheet to be applied to screen

/**
 * Displays the login screen
 * @param {*} navigation Navigation path for screens related to Login
 * @returns Login screen and respective buttons for functions.
 */
const LogInScreen = ({navigation}) => { 
  const [email, setEmail] = useState('');   //  Email used to log in and set operation
  const [password, setPassword] = useState('');   // Password used to log in and set operation
  const [mac, setMAC] = useState('');  // MAC address of the user (not used for now, using a dummy address)

  // Request for logging in
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

  /**
   * Handler for logging in. Submits the POST request and verifies input of information.
   */
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
          //console.log(dataJSON["name"])
          //console.log("navigating to bottom tabs")
          AsyncStorage.setItem('token', dataJSON["token"])
          AsyncStorage.setItem('userId', dataJSON["userId"].toString())
          navigation.navigate("Bottom Tab")
        }
      }
    } catch(error) { 
      console.log(error)
    }
  };

  // Loads Login screen
  return (
    <View style={globalStyles.loginContainer}>
      <Text style = {globalStyles.titleText}>Log In</Text>
      <TextInput 
        placeholder="Email"
        placeholderTextColor={"#a1a1a1"}
        onChangeText={name => setEmail(name)}
        style = {globalStyles.textInput}
      />
      <TextInput 
        placeholder='Password' 
        placeholderTextColor={"#a1a1a1"}
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