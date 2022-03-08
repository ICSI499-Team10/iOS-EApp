import React from 'react'; 
import { StyleSheet} from 'react-native';
import StackNavigator from '../navigators/stackNav';

const AccountScreen = props => { 
    return (
        <StackNavigator />
    )
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {AccountScreen}