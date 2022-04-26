import React from 'react'; 
import {View, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const AccountScreen = ({navigation}) => { 
  return (
    <View style={globalStyles.accScreen}>
      <Button
        title="My Profile"
        color="#46AFFF" 
        onPress={() => navigation.navigate("My Profile")}
      />
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