
import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 

const BeReadyScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Be Ready Screen</Text>
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

export {BeReadyScreen}