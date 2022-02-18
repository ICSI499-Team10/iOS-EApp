
import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 

const AdvisoryScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Advisory Screen</Text>
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

export {AdvisoryScreen}