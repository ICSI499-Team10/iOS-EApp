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
        try { 
            const asyncToken = await AsyncStorage.getItem('token')
            console.log(asyncToken)
            setToken(asyncToken)
        } catch(error) { 
            console.log(error)
        }
    }
    
    const getUserId = async () => { 
        try { 
            const asyncUserId = await AsyncStorage.getItem('userId')
            console.log(asyncUserId)
            setUserId(asyncUserId)
        } catch(error) { 
            console.log(error)
        }
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
                        title = "Save Changes"
                        onPress = {() => submitHandler(this)}
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