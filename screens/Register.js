import React from 'react'; 
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'; 
import { Alert } from 'react-native-web';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mac, setMAC] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [emergencyName, setEmergencyName] = React.useState('');
  const [emergencyPhone, setEmergencyPhone] = React.useState('');

  const req = {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      "userType": "",
      "user": {
        "name": name,
        "email": email,
        "mac": mac,
        "password": password,
        "address": address,
        "phone": phone,
        "emergencyName": emergencyName,
        "emergencyPhone": emergencyPhone
      }
    }
  };

  const submitHandler = async () => {
    try {
      const URI = "http://eapp-test.arcc.albany.edu/publish/CreateAccount";
      const response = await fetch(URI, req);
      const dataJSON = await response.json();
      console.log(dataJSON["user"]);
    } catch(error) {
      console.log(error);
    }
  };

  return (
      <View style={styles.screen}>
          <Text>Create an Account</Text>
          <TextInput placeholder='Name' onChangeText={name => setName(name)}/>
          <TextInput placeholder='Email' onChangeText={email => setEmail(email)}/>
          <TextInput placeholder='Phone Number' onChangeText={phone => setPhone(phone)}/>
          <TextInput placeholder='Password' secureTextEntry = {true} onChangeText={password => setPassword(password)}/>
          <TextInput placeholder='Confirm Password' secureTextEntry = {true}/>
          <TextInput placeholder='Address' onChangeText={address => setAddress(address)}/>
          <TextInput placeholder='Emergency Contact' onChangeText={emergencyName => setEmergencyName(emergencyName)}/>
          <TextInput placeholder='Emergency Contact Phone Number' onChangeText={emergencyPhone => setEmergencyPhone(emergencyPhone)}/>
          <Button 
            title = "Create Account"
            onPress = {() => submitHandler(this)}
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