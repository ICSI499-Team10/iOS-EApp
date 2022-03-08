import React from 'react'; 
import { Text, View, StyleSheet, Button} from 'react-native'; 

const BeReadyAllScreen = props => { 
  console.log(props)
    return (
        <View style={styles.screen}>
            <Text>Be Ready: All Screen</Text>
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

export {BeReadyAllScreen}