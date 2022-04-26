import React,{useState} from 'react'; 
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';

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

    const submitHandler = async () => {
        try {
            const URI = "http://eapp-test.arcc.albany.edu/publish/UpdateAccount";
            const response = await fetch(URI, req);
            const dataJSON = await response.json();
            console.log(dataJSON); 
        } catch(error) {
            console.log(error);
        };
        if(reponse.status == 200) {
            alert("Successfully updated information!");
        } else {
            alert("Error: try again later.");
        }
    };

    return (
        <View style={styles.screen}>
            <Text>Profile Screen</Text>
            <Text>Update User Information</Text>
            <TextInput placeholder={name} onChangeText={name => setName(name)}/>
            <TextInput placeholder='Email' onChangeText={email => setEmail(email)}/>
            <TextInput placeholder='Phone Number' onChangeText={phone => setPhone(phone)}/>
            <TextInput placeholder='Password' secureTextEntry = {true} onChangeText={password => setPassword(password)}/>
            <TextInput placeholder='Address' onChangeText={address => setAddress(address)}/>
            <TextInput placeholder='Emergency Contact' onChangeText={emergencyName => setEmergencyName(emergencyName)}/>
            <TextInput placeholder='Emergency Contact Phone Number' onChangeText={emergencyPhone => setEmergencyPhone(emergencyPhone)}/>
            <Button 
                title = "Save Changes"
                onPress = {() => submitHandler(this)}
            />
            <Button title="Go Back" onPress={() => props.navigation.goBack()}/>
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

export {ProfileScreen}