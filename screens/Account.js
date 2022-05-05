import React from 'react'; 
import {View, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

const AccountScreen = ({navigation}) => { 
  return (
    <View style={globalStyles.accScreen}>
      <Button
        icon = {({size, color}) => (<Icon type="FontAwesome" name={"warning"} color={color} size={size}/>)}
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