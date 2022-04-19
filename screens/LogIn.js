import React from 'react'; 
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'; 

const LogInScreen = ({navigation}) => { 
    return (
        <View style={styles.screen}>
            <Text>Log In</Text>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password' secureTextEntry = {true}/>
            <Button 
              title = "Login"
              onPress={() => navigation.navigate("Bottom Tab")} 
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

export {LogInScreen}