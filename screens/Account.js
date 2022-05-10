import React from 'react'; 
import {View, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'; // Import of style sheet to be applied to screen

/**
 * Displays the Account screen and its buttons that navigate to other options.
 * @param {*} navigation Navigation path for screens related to Account
 * @returns Account screen and its buttons to options.
 */
const AccountScreen = ({navigation}) => { 
  return (
    // View styled and holds buttons that navigate to Account related screens (found along navigation path)
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
    </View>
  )
}

export {AccountScreen}