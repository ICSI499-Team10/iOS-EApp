import React from 'react'; 
import {Text, View, StyleSheet, Button} from 'react-native'; 

const AdvisoryAllScreen = props => { 
  console.log(props)
    return (
        <View style={styles.screen}>
            <Text>Advisory: All Screen</Text>
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

export {AdvisoryAllScreen}