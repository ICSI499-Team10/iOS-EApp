import React, {useState} from 'react'; 
import {Text, View, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';    // Import of style sheet to be applied to screen

/**
 * Displays Register screen.
 * @param {*} navigation Navigation path for screens related to Register
 * @returns Return screen and respective buttons for function
 */
const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');   // Name of user
  const [email, setEmail] = useState('');   // Email of user
  const [mac, setMAC] = useState('');   // MAC address of the user (not used for now, using a dummy address)
  const [password, setPassword] = useState('');   // Password of user
  const [address, setAddress] = useState('');   // Address of user
  const [phone, setPhone] = useState('');   // Phone number of user
  const [emergencyName, setEmergencyName] = useState('');   // Emergency contact for user
  const [emergencyPhone, setEmergencyPhone] = useState('');   // Emergency contact's phone number for user

  // Request for account registration
  const req = {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userType": "Visitor",
      "user": {
        "name": name,
        "email": email,
        "mac": '3c:06:30:38:b6:14',
        "password": password,
        "address": address,
        "phone": phone,
        "emergencyName": emergencyName,
        "emergencyPhone": emergencyPhone
      }
    })
  };

  /**
   * Handler for creating account. Submits POST request and data is saved to database.
   */
  const submitHandler = async () => {
    try {
      if(!name || !email || !password || !phone) {
        alert("Missing required information! Please fill in the missing information");
      } else { 
        const URI = "http://eapp-test.arcc.albany.edu/publish/CreateAccount";
        const response = await fetch(URI, req);
        const dataJSON = await response.json();
        console.log(dataJSON);
        navigation.navigate("Log In");
      }
    } catch(error) {
      console.log(error);
    }
  };

  // Loads Register screen
  return (
    <View style={globalStyles.loginContainer}>
      <Text style={globalStyles.titleText2}>Create an Account</Text>
      <TextInput placeholder='Name' placeholderTextColor={"#a1a1a1"} onChangeText={name => setName(name)} style={globalStyles.textInput}/>
      <TextInput placeholder='Email' placeholderTextColor={"#a1a1a1"} onChangeText={email => setEmail(email)} style={globalStyles.textInput}/>
      <TextInput placeholder='Phone Number' placeholderTextColor={"#a1a1a1"} onChangeText={phone => setPhone(phone)} style={globalStyles.textInput}/>
      <TextInput placeholder='Password' placeholderTextColor={"#a1a1a1"} secureTextEntry = {true} onChangeText={password => setPassword(password)} style={globalStyles.textInput}/>
      <TextInput placeholder='Address' placeholderTextColor={"#a1a1a1"} onChangeText={address => setAddress(address)} style={globalStyles.textInput}/>
      <TextInput placeholder='Emergency Contact' placeholderTextColor={"#a1a1a1"} onChangeText={emergencyName => setEmergencyName(emergencyName)} style={globalStyles.textInput}/>
      <TextInput placeholder='Emergency Contact Phone Number' placeholderTextColor={"#a1a1a1"} onChangeText={emergencyPhone => setEmergencyPhone(emergencyPhone)} style={globalStyles.textInput}/>

      <View style={globalStyles.containerSub}>
        <View style = {globalStyles.registerButtons}>
            <Button 
              title = "Create Account"
              onPress = {() => submitHandler(this)}
              color = "white"
            />
        </View>

        <View style = {globalStyles.registerButtons}>
          <Button 
            title = "Cancel"
            onPress = {() => navigation.navigate("Log In")}
            color = "white"
          />
        </View>
      </View>
    </View>
  )
};

export {RegisterScreen}