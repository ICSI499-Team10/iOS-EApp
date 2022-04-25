import React from 'react'; 
import {Text, View, StyleSheet, Button, SectionList, StatusBar, SafeAreaView} from 'react-native'; 

const SettingsScreen = props => { 
  return (
      <SafeAreaView style={styles.screen}>
        

      </SafeAreaView>  
  )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {SettingsScreen}