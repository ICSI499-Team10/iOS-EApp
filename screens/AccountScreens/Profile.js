import React,{useState, useEffect} from 'react'; 
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = props => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //const [mac, setMAC] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState('')
    
    const getToken = async () => { 
        const asyncToken = await AsyncStorage.getItem('token')
        console.log(asyncToken)
        setToken(asyncToken)
    }
    
    const getUserId = async () => { 
        const asyncUserId = await AsyncStorage.getItem('userId')
        console.log(asyncUserId)
        setUserId(asyncUserId)
    }

    const updateReq = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userType": "Visitor",
            "user": {
                "token": token, 
                "userId": userId,
                "name": name,
                "email": email,
                "password": password,
                "address": address,
                "phone": phone,
                "emergencyName": emergencyName,
                "emergencyPhone": emergencyPhone
            }
        })
    };

    const submitHandler = async () => {
        try {
            const URI = "http://eapp-test.arcc.albany.edu/publish/UpdateAccount";
            console.log(updateReq)
            const response = await fetch(URI, updateReq);
            const dataJSON = await response.json();
            console.log(dataJSON);
            if(dataJSON == null) {
                alert("Error: information could not be updated");
            } else {
                alert("Info updated")
                console.log(dataJSON)
            }
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => { 
        getToken()
        getUserId()
    },[])
    return (
        <View style={globalStyles.loginContainer}>
            <Text style={globalStyles.titleText2}>Update User Information</Text>
            <TextInput placeholder='Name' onChangeText={name => setName(name)} style={globalStyles.textInput}/>
            <TextInput placeholder='Email' onChangeText={email => setEmail(email)} style={globalStyles.textInput}/>
            <TextInput placeholder='Phone Number' onChangeText={phone => setPhone(phone)} style={globalStyles.textInput}/>
            <TextInput placeholder='Password' secureTextEntry = {true} onChangeText={password => setPassword(password)} style={globalStyles.textInput}/>
            <TextInput placeholder='Address' onChangeText={address => setAddress(address)} style={globalStyles.textInput}/>
            <TextInput placeholder='Emergency Contact' onChangeText={emergencyName => setEmergencyName(emergencyName)} style={globalStyles.textInput}/>
            <TextInput placeholder='Emergency Contact Phone Number' onChangeText={emergencyPhone => setEmergencyPhone(emergencyPhone)} style={globalStyles.textInput}/>
            
            <View style={globalStyles.containerSub}>
                <View style = {globalStyles.registerButtons}>
                    <Button 
                        title = "Save Changes"
                        onPress = {() => submitHandler(this)}
                        color = "white"
                    />
                </View>
                <View style = {globalStyles.registerButtons}>
                    <Button
                        title="Go Back"
                        onPress={() => props.navigation.goBack()}
                        color = "white"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {ProfileScreen}