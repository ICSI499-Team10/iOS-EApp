import React from 'react'; 
import {Text, View, StyleSheet, FlatList, Button, StatusBar, SafeAreaView} from 'react-native'; 


const SettingsData = [
  {
    title: 'Item 1',
  },
  {
    title: 'Item 2',
  },
  {
    title: 'Item 3',
  },
 

];

const Item = ({title}) => (
  <View style = {styles.screen}>
    <Text style = {styles.screenText}> {title} </Text>
  </View>
);


const SettingsScreen = props => { 

  const renderItem = ({item}) => (
    <Item title={item.title}/>
  );

  return (
      <SafeAreaView style={styles.screen}>
        <FlatList
          data={SettingsData}
          renderItem={renderItem}
          
        />
      </SafeAreaView>  
  )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenText:{
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
});

export {SettingsScreen}