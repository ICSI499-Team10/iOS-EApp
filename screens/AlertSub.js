import React from 'react'; 
import {StyleSheet, View, Text, Button} from 'react-native'; 

const AlertScreenSub = props => { 
  return (
    <View style={styles.screen}>
        <Button title="All" onPress={() => { 
          props.navigation.navigate('All')
        }}/>
        <Button title="Fire" onPress={() => { 
          props.navigation.navigate('Fire')
        }}/>
        <Button title="Health" onPress={() => { 
          props.navigation.navigate('Health')
        }}/>
        <Button title="Roads" onPress={() => { 
          props.navigation.navigate('Roads')
        }}/>
        <Button title="Weather" onPress={() => { 
          props.navigation.navigate('Weather')
        }}/>
        <Button title="Other" onPress={() => { 
          props.navigation.navigate('Other')
        }}/>
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

export {AlertScreenSub}