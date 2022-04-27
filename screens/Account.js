import React from 'react'; 
import {View, Button, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const helloName = async () => { 
  try { 
    const URI = "http://eapp-test.arcc.albany.edu/publish/SignIn";
    const response = await fetch(URI, req);
    const dataJSON = await response.json();
    console.log(dataJSON)
    return dataJSON["name"];
  } catch(error) { 
    console.log(error)
  }
}

const AccountScreen = ({navigation}) => { 
  var greetName = 'Hello, ' + helloName + '!';
  return (
    <View style={globalStyles.accScreen}>
      <Text>{greetName}</Text>
      <Button
        title="Settings"
        color="#46AFFF" 
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="Contact"
        color="#46AFFF" 
        onPress={() => navigation.navigate("Contact")}
      />
      <Button
        title="About"
        color="#46AFFF" 
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Login"
        color="#46AFFF" 
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  )
}

export {AccountScreen}