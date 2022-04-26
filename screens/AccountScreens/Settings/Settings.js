import React,{useState} from 'react'; 
import {Text, View, StyleSheet, FlatList, Button, StatusBar, SafeAreaView, Switch} from 'react-native'; 
import SettingsList from 'react-native-settings-list';



const SettingsScreen = props => {
  
  const [notificationState, setState] = useState(false)

  const onNotificationsChange = () =>{
    if(notificationState == false){
      setState(true);
    }
    else{
      setState(false);
    }
  }

  return (
      <View>
        <SettingsList>
          <SettingsList.Header headerText='Notifications'/>
          <SettingsList.Item
            hasNavArrow={false}
            switchState={notificationState}
            switchOnValueChange={onNotificationsChange}
            hasSwitch={true}
            title='Push Notifications'
          />
        </SettingsList>
      </View>  
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