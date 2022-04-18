import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import { Alert, Button } from 'react-native';
import StackNavigator from '../navigators/stackAdvisoryNav';
import {globalStyles} from '../styles/globalStyles';

const AdvisoryScreen = props => { 
    return (
      <View style={globalStyles.stackNavStyle}>
        <Button
          title="All"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
          <Button
          title="Fire"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
          <Button
          title="Health"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
          <Button
          title="Roads"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
          <Button
          title="Weather"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
          <Button
          title="Other"
          color="#46AFFF" 
          onPress={() => alert('IT WORKED')}
          />
      </View>
    )
}


export {AdvisoryScreen}