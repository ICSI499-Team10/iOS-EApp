
import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 

const AlertScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>Alert Screen</Text>
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

export {AlertScreen}