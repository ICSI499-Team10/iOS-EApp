import React,{useState} from 'react'; 
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const ProfileScreen = props => { 
    console.log(props);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mac, setMAC] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');

    const updateReq = {
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

    const submitHandler = async () => {
        try {
            const URI = "http://eapp-test.arcc.albany.edu/publish/UpdateAccount";
            const response = await fetch(URI, updateReq);
            const dataJSON = await response.json();
            console.log(dataJSON);
            if(response.status == 200) {
                alert("Successfully updated information!");
            } else {
                alert("Error: try again later.");
            }
        } catch(error) {
            console.log(error);
        }
    };

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