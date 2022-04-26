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
  <View>
    <Text>{title}</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {SettingsScreen}